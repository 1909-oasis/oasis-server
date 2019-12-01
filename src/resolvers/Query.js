const {APP_SECRET, getUserId} = require('../utils')

function info() {
  return 'Oasis test Query'
}

async function me (parent, args, context, info){
  console.log('we are in meeeeee')
  return await context.prisma.user({
    id: getUserId(context)
  })
}

// returns array of starterpack cocktails if starterpack is set to true in query.
async function cocktailStarter(parent, args, context, info) {
  console.log('we are in starter pack')
  const pack = await context.prisma.cocktails({
    where: {
      starterPack: args.starterPack
    }
  })
  console.log(`this is pack`, pack)
  return pack
}

async function recommendationList (parent, args, context, info) {
  console.log('in recommendationList')
  const list = await context.prisma.userCocktails({
    where: {
      user: { id: getUserId(context) },
      recommended: true
    }
  })
  return list
}

async function unratedCocktails (parent, args, context, info){

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

  const ratedUserCocktails = await context.prisma.userCocktails({
    where: {
      user: { id: getUserId(context)}
    }
  }).$fragment(fragment)
  cocktailIdsToExclude = ratedUserCocktails.map((element)=>element.cocktail.id)

  const unratedCocktails =  await context.prisma.cocktails({
    where:
    {NOT: [{
      id_in: cocktailIdsToExclude
    }]}
  })

  returnArr = []
  for(let i = 0; i < 20 && i < unratedCocktails.length; i++){
    const randomIndex = Math.floor(Math.random() * unratedCocktails.length)
    returnArr.push(unratedCocktails[randomIndex])
  }

  return returnArr
}

module.exports = {
  info,
  me,
  cocktailStarter,
  recommendationList,
  unratedCocktails
}
