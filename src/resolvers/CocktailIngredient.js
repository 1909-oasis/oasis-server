function cocktail(parent, args, context) {
  return context.prisma
    .cocktailIngredient({
      id: parent.id
    })
    .cocktail();
}

function ingredient(parent, args, context) {
  return context.prisma
    .cocktailIngredient({
      id: parent.id
    })
    .ingredient();
}

module.exports = {
  cocktail,
  ingredient
};
