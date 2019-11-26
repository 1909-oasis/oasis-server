function cocktail(parent, args, context) {
  return context.prisma
    .userCocktail({
      id: parent.id
    })
    .cocktail();
}

function user(parent, args, context) {
  return context.prisma
    .userCocktail({
      id: parent.id
    })
    .user();
}

module.exports = {
  user,
  cocktail
};
