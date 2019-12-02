function ingredients(parent, args, context) {
  return context.prisma
    .cocktail({
      id: parent.id,
    })
    .ingredients();
}

module.exports = {
  ingredients,
};
