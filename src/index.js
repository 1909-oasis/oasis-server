const { GraphQLServer } = require('graphql-yoga')

const server = new GraphQLServer({
  //TODO
})

server.start(() => console.log('Server is running on somewhere'))
