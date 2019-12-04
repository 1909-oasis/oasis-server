const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { unratedCocktails, cocktailStarter } = require("./Query");
const { APP_SECRET, getUserId } = require("../utils");

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });

  const newArgs = {...args, user: user}
  await initializeQueue(parent, newArgs, context, info)


  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user,
  };
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("No such user found");
  }
  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return {
    token,
    user,
  };
}

async function swipe(parent, args, context, info) {
  console.log('in swipe')
  const userId = getUserId(context);
  const ratingExists = await context.prisma.$exists.userCocktail({
    user: { id: userId },
    cocktail: { id: args.cocktailId },
  });
  if (userId && !ratingExists) {
    const newUserCocktail = await context.prisma.createUserCocktail({
      user: { connect: { id: userId } },
      cocktail: { connect: { id: args.cocktailId } },
      rating: args.rating,
      recommended: false,
    });

    let cocktail = await context.prisma.cocktail({
      id: args.cocktailId,
    });
    let totalRate = cocktail.totalRating;
    let totalVote = cocktail.totalVotes;

    await context.prisma.updateCocktail({
      data: {
        totalRating: totalRate + args.rating,
        totalVotes: totalVote + 1,
      },
      where: {
        id: args.cocktailId,
      },
    });
    await shiftFromQueue(parent, args, context, info)
    return newUserCocktail;
  }
}

//gets 20 random unrated cocktails and adds them to the queue.
async function updateQueue(parent, args, context, info) {
  const userId = getUserId(context);
  let cocktailsToAdd = await unratedCocktails(
    parent,
    args,
    context,
    info
  );
  let cocktailIdsToAdd = cocktailsToAdd.map(cocktail => cocktail.id);
  let newArgs = { ...args, cocktailIds: cocktailIdsToAdd, userId: userId };
  return addToQueue(parent, newArgs, context, info);
}

async function initializeQueue(parent,args,context,info){
  const pack = await cocktailStarter(parent, args, context, info);
  const userId = args.user.id
  let cocktailIdsToAdd = pack.map(cocktail => cocktail.id);
  const newArgs = { ...args, cocktailIds: cocktailIdsToAdd, userId: userId}
  return addToQueue(parent, newArgs, context, info)
}

//will add any new cocktails to the back of the existing Queue, not replacing them if they already exist.
async function addToQueue(parent, args, context, info) {
  const userId = args.userId;
  const newCocktailIds = args.cocktailIds;
  const user =  context.prisma.user({
    id: userId,
  });
  //this contains all of the Cocktail Objects in the current Queue
  let currentQueue = await user.queue();

  //GraphQL Shenanigans:  the 'queue' field in updateUser() expects a CocktailUpdateManyInput object which has a 'connect' key.  This 'connect' key expects an array of [CocktailWhereUniqueInput!] objects, each of which can be formatted as {id: cocktailId} to connect with the right cocktail in our Cocktail table.  Soo we create an array of these CocktailWhereUniqueInput objects here!!!

  existingCocktailsArray = currentQueue.map(cocktail => {
    return { id: cocktail.id };
  });

  let newCocktailsArray = newCocktailIds.map(cocktailId => {
    return { id: cocktailId };
  });

  //here we look through every cocktail that we are adding and determine if it already exists in the Queue.  If it does, we ignore it.
  let uniqueNewCocktails = newCocktailsArray.filter(newCocktail => {
    let alreadyInExistingCocktailsArray = existingCocktailsArray.every(
      existingCocktail => {
        return existingCocktail.id !== newCocktail.id;
      }
    );
    return alreadyInExistingCocktailsArray;
  });

  //Now we add the unique new cocktails our existing queue:
  const newArr = existingCocktailsArray.concat(uniqueNewCocktails);

  // //now we update the user with the array of {id: cocktailId} objects.
  const updatedUser = await context.prisma.updateUser({
    data: {
      queue: { connect: newArr },
    },
    where: {
      id: userId,
    },
  });
  return updatedUser;
}

async function shiftFromQueue(parent, args, context, info) {
  const userId = getUserId(context);
  const user =  context.prisma.user({
    id: userId,
  });
  let currentQueue = await user.queue();

  const updatedUser = await context.prisma.updateUser({
    data: {
      queue: { disconnect: {id: currentQueue[0].id}}
    },
    where: {
      id: userId,
    }
  });
  return updatedUser;

}

module.exports = {
  signup,
  login,
  swipe,
  updateQueue,
  initializeQueue,
  addToQueue,
  shiftFromQueue
};
