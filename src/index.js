const Mutation = require("./resolvers/Mutation");
const UserCocktail = require("./resolvers/UserCocktail");
const User = require("./resolvers/User");
const Cocktail = require("./resolvers/Cocktail");
const CocktailIngredient = require("./resolvers/CocktailIngredient");
const Query = require("./resolvers/Query");
const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query,
  Mutation,
  UserCocktail,
  User,
  Cocktail,
  CocktailIngredient,
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    };
  },
});

server.start(() => console.log("Server is running on 4000"));
