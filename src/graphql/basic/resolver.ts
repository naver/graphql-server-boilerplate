/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { getProduct, getProductList, createProduct, updateProduct, deleteProduct } from '../../datasource/product';
import { IProduct } from '../../datasource/product/model';

const resolvers = {
  Query: {
    product: (parent: any, { productId }: { productId: string }) => getProduct(productId),
    products: (parent: any) => getProductList(),
  },

  Mutation: {
    createProduct: (parent: any, { product }: { product: IProduct }) => createProduct(product),
    updateProduct: (parent: any, { product }: { product: IProduct }) => updateProduct(product),
    deleteProduct: (parent: any, { productId }: { productId: string }) => deleteProduct(productId),
  },
};

export { resolvers };
