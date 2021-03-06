"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserCocktail",
    embedded: false
  },
  {
    name: "Cocktail",
    embedded: false
  },
  {
    name: "CocktailIngredient",
    embedded: false
  },
  {
    name: "Ingredient",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://oasis-1909-804e350939.herokuapp.com/oasis-server-v3/dev`
});
exports.prisma = new exports.Prisma();
