/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    orders(status: String!): [Order]
  }

  type Order {
    sequence: Int!
    status: String!
    productId: String!
    deviceId: String!
    message: String
  }
`;

const mocks = {
  Order: () => ({
    sequence: 1,
    status: 'done',
    productId: 'ia',
    deviceId: 'someDeviceKey',
    message: 'addShot',
  }),
};

export { typeDefs, mocks };
