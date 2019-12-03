const { APP_SECRET, getUserId } = require("../utils");

function info() {
  return "Oasis test Query";
}

async function me(parent, args, context, info) {
  return await context.prisma.user({
    id: getUserId(context),
  });
}

async function dan(parent, args, context, info) {
  return await context.prisma.user({
    id: "ck3gews83000e0740izc0ska5",
  });
}

// returns array of starterpack cocktails if starterpack is set to true in query.
async function cocktailStarter(parent, args, context, info) {
  const pack = await context.prisma.cocktails({
    where: {
      starterPack: args.starterPack,
    },
  });

  return pack;
}

async function recommendationList(parent, args, context, info) {
  const list = await context.prisma.userCocktails({
    where: {
      user: { id: getUserId(context) },
      recommended: true,
    },
  });
  return list;
}

//returns 20 random unrated cocktails (or however many are left if less than 20)
async function unratedCocktails(parent, args, context, info) {
  const fragment = `
  fragment UserCocktailWithCocktail on UserCocktail {
    id
    rating
    cocktail {
      id
      name
    }
  }
`;

  const ratedUserCocktails = await context.prisma
    .userCocktails({
      where: {
        user: { id: getUserId(context) },
      },
    })
    .$fragment(fragment);
  cocktailIdsToExclude = ratedUserCocktails.map(
    element => element.cocktail.id
  );

  const unratedCocktails = await context.prisma.cocktails({
    where: {
      NOT: [
        {
          id_in: cocktailIdsToExclude,
        },
      ],
    },
  });

  returnArr = [];
  for (let i = 0; i < 20 && i < unratedCocktails.length; i++) {
    const randomIndex = Math.floor(
      Math.random() * unratedCocktails.length
    );
    returnArr.push(unratedCocktails[randomIndex]);
  }

  return returnArr;
}

async function findAllUserCocktailIDs(parent, args, context, info) {
  const userCocktails = await context.prisma.userCocktails({
    where: {
      user: { id: getUserId(context) },
    },
  });

  return userCocktails;

  // console.log(
  //   "this is our userCocktails in findAllUserCocktailIDs",
  //   userCocktails
  // );
  // let userCocktailIds = userCocktails.map(
  //   userCocktail => userCocktail.cocktail
  // );
  // return userCocktailIds;
}

async function usersWhoAlsoRatedCocktail(
  parent,
  args,
  context,
  info
) {
  let userCocktails = await findAllUserCocktailIDs(
    parent,
    args,
    context,
    info
  );

  let userCocktailObj = {};

  console.log(
    `this is our array of cocktails rated for the logged in user:`,
    userCocktails
  );

  // userCocktailIds.forEach(async (cocktailId, i) => {
  //   // console.log(`cocktail at ${i}`, cocktailId);
  //   let userCocktails = await context.prisma.userCocktails({
  //     where: {
  //       cocktail: { id: cocktailId },
  //     },
  //   });
  //   // console.log(`userCocktails at ${i}`, userCocktails);
  // });

  return 0;
}

module.exports = {
  info,
  me,
  dan,
  cocktailStarter,
  recommendationList,
  unratedCocktails,
  findAllUserCocktailIDs,
  usersWhoAlsoRatedCocktail,
};
