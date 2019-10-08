import { resolvers } from './resolver';
import { typeDefs } from './type';
import { makeExecutableSchema } from 'graphql-tools';

const chainSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { chainSchema };
