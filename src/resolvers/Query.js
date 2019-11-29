const {APP_SECRET, getUserId} = require('../utils')

function info() {
  return 'Oasis test Query'
}

async function me(parent, args, context, info) {
  console.log('we are in meeeeee')
  return await context.prisma.user({
    id: getUserId(context)
  })
}

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

module.exports = {
  info,
  me,
  cocktailStarter
}
