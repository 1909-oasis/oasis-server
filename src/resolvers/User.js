function votes(parent, args, context) {
  return context.prisma
    .user({
      id: parent.id
    })
    .votes();
}

module.exports = {
  votes
};
