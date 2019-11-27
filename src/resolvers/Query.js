const { APP_SECRET, getUserId } = require("../utils");

function info (){
  return "Oasis test Query"
}

async function me (parent, args, context, info){
  console.log('we are in meeeeee')
  return await context.prisma.user({
    id: getUserId(context)
  })
}

module.exports = {
  info,
  me
}
