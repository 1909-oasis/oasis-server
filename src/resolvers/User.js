function votes(parent, args, context) {
  return context.prisma
    .user({
      id: parent.id
    })
    .votes()
}

function queue(parent, args, context) {
  return context.prisma
    .user({
      id: parent.id
    })
    .queue()
}

module.exports = {
  votes,
  queue
}
