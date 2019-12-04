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
      starterPack: true,
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

// global variables
let loggedInUserRatingMap = {};

// find all other cocktails that the logged in user has rated => returns array of all cocktails that the logged in user has rated
async function findAllUserCocktailIDs(parent, args, context, info) {
  const fragment = `
  fragment UserCocktailwCocktailUser on UserCocktail {
    id
    rating
    cocktail {
      id
    }
    user {
      id
    }
  }
`;

  const userCocktails = await context.prisma
    .userCocktails({
      where: {
        user: { id: getUserId(context) },
      },
    })
    .$fragment(fragment);

  userCocktails.forEach(userCocktail => {
    loggedInUserRatingMap[userCocktail.cocktail.id] =
      userCocktail.rating;
  });

  return Object.keys(loggedInUserRatingMap);
}

// for each cocktail that the logged in user has rated, we are finding all other users that have also rated that cocktail and including their rating.
async function getRecommendation(parent, args, context, info) {
  const fragment = `
  fragment UserCocktailwCocktailUser on UserCocktail {
    id
    rating
    cocktail {
      id
    }
    user {
      id
    }
  }
`;

  let userCocktailIds = await findAllUserCocktailIDs(
    parent,
    args,
    context,
    info
  );

  const mapOfUserIDs = [];
  const scoreSystem = [];

  for (let i = 0; i < userCocktailIds.length; i++) {
    let cocktailId = userCocktailIds[i];
    let userCocktails = await context.prisma
      .userCocktails({
        where: {
          cocktail: { id: cocktailId },
        },
      })
      .$fragment(fragment);

    userCocktails.forEach(userRating => {
      if (userRating.user.id !== getUserId(context)) {
        if (mapOfUserIDs.indexOf(userRating.user.id) === -1) {
          mapOfUserIDs.push(userRating.user.id);
          scoreSystem.push(0);
        }
        let index = mapOfUserIDs.indexOf(userRating.user.id);
        if (loggedInUserRatingMap[cocktailId] === userRating.rating) {
          scoreSystem[index]++;
        } else {
          scoreSystem[index]--;
        }
      }
    });
  }

  let max = Math.max(...scoreSystem);
  let maxIdx = scoreSystem.indexOf(max);
  let userIdofMax = mapOfUserIDs[maxIdx];

  const fragment2 = `
  fragment UserCocktailofCompUser on UserCocktail {
    id
    rating
    cocktail {
      id
    }
  }
`;

  let compareUserCocktails = await context.prisma
    .userCocktails({
      where: {
        user: { id: userIdofMax },
        rating: 1,
      },
    })
    .$fragment(fragment2);

  let compareUserCocktailIDS = compareUserCocktails
    .map(userCocktail => userCocktail.cocktail.id)
    .filter(cocktailID => !loggedInUserRatingMap[cocktailID]);

  let cocktails = await context.prisma.cocktails({
    where: {
      id_in: compareUserCocktailIDS,
    },
  });

  let highestRating = 0;
  let highestRatedCocktail;

  cocktails.forEach(cocktail => {
    if (cocktail.totalRating > highestRating) {
      highestRating = cocktail.totalRating;
      highestRatedCocktail = cocktail;
    }
  });

  return highestRatedCocktail;
}

module.exports = {
  info,
  me,
  dan,
  cocktailStarter,
  recommendationList,
  unratedCocktails,
  findAllUserCocktailIDs,
  getRecommendation,
};
