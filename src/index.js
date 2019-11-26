const Mutation = require("./resolvers/Mutation");
const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: { info: () => "Oasis test Query" },
  Mutation
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() => console.log("Server is running on 4000"));
