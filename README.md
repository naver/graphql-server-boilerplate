# GraphQL Server boilerplate

GraphQL Server boilerplate provides simple and easily adaptable sample code for your GraphQL server.

It is based on Typescript and Apollo Express that are commonly used in GraphQL community

## GraphQL Usage Samples
- Basic  : Basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations using mongoose
- Advanced : Chain resolver pattern applying [Paypal Best Practice](https://medium.com/paypal-engineering/graphql-resolvers-best-practices-cd36fdbcef55)
 
- Mock  : Mock Schema using [GraphQL Mocking](https://www.apollographql.com/docs/graphql-tools/mocking/)

# Quickstart

```bash
yarn install
yarn start
```

To test GraphQL query in your local environment,
Open a browser and connect to GraphQL Playground 
> http://localhost:10000/graphql

⚠️ In production environment, it's recommended to run ``yarn build`` and use transpiled js in``/dist``

# Mongoose CRUD Samples for GraphQL Request
You can test GraphQL Server with Mongoose without MongoDB installation.
It is easy to perform a sample test since it uses MongoDB memory server in development environment

⚠️  In production environment, it is recommended to set up a standalone MongoDB server and change mongoose connection configurations in `src/appbase/mongoose.ts` file

## Basic CRUD GraphQL query Samples
### Create
```gql
mutation create {
  createProduct(product: { productId: "cfes", name: "espresso", price: 10}) {
    _id
    productId
    name
    price
  }
}
```

### Read
```gql
# select product by id 
query readOne{
  product(productId : "cfes"){
    productId
    name
    price
  }
}

# select product list
query readMany{
  products{
    productId
    name
    price
  }
}
```

### Update
```gql
mutation update {
  updateProduct(product: { productId: "cfes", name: "espresso", price: 20}) {
    _id
    productId
    name
    price
  }
}
```

### Delete
```gql
mutation delete {
  deleteProduct(productId : "cfes")
}
```

# License

```
MIT License

Copyright (c) 2019-present NAVER Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
