/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { typeDefs, mocks } from './type';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

const mockSchema = makeExecutableSchema({
  typeDefs,
});
addMockFunctionsToSchema({ mocks, schema: mockSchema });

export { mockSchema };
