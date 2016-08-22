import { createApolloServer } from 'meteor/apollo';
import { schema, resolvers } from '../imports/api/schema';
import { makeExecutableSchema } from 'graphql-tools';

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

createApolloServer({
  graphiql: true,
  pretty: true,
  schema: executableSchema,
});
