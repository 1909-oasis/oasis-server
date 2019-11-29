const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {queue} = require('./User')
const { APP_SECRET, getUserId } = require("../utils");

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });
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
    return newUserCocktail;
  }
}

async function updateQueue(parent, args, context, info) {
  console.log('in updateQueue')
  const userId = getUserId(context);

  const updatedUser = await context.prisma.updateUser({
    data: {
      queue: args.cocktailArr,
    },
    where: {
      id: userId,
    },
  });
  return updatedUser;
}

//will always replace the entire queue with a new one.
//takes an array of cocktail Ids as an argument (cocktailIds)
async function createQueue(parent, args, context, info) {
  console.log('in addToQueue')
  const userId = getUserId(context)
  const cocktailIds = args.cocktailIds

  //GraphQL Shenanigans:  the 'queue' field in updateUser() expects a CocktailUpdateManyInput object which has a 'connect' key.  This 'connect' key expects an array of [CocktailWhereUniqueInput!] objects, each of which can be formatted as {id: cocktailId} to connect with the right cocktail in our Cocktail table.  Soo we create an array of these CocktailWhereUniqueInput objects here!!!
  let connectArray = cocktailIds.map((cocktailId) => {
    return {id: cocktailId}
  })

  //now we update the user with the array of {id: cocktailId} objects.
  const updatedUser = await context.prisma.updateUser({
    data: {
      queue: {connect: connectArray},
    },
    where: {
      id: userId,
    },
  });
  return updatedUser;
}

module.exports = {
  signup,
  login,
  swipe,
  updateQueue,
  createQueue
};
