/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    product(productId: String!): Product
    products: [Product]
  }

  type Mutation {
    createProduct(product: ProductInput!): Product
    updateProduct(product: ProductInput!): Product
    deleteProduct(productId: String!): Boolean
  }

  type Product {
    _id: ID!
    productId: String
    name: String
    price: Int
  }

  input ProductInput {
    productId: String
    name: String
    price: Int
  }
`;

export { typeDefs };
