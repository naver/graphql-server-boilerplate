/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import { isEmpty } from 'lodash';
import { productModel, IProduct } from './model';

async function getProduct(productId: string) {
  return await productModel.findOne({ productId });
}

async function getProductList() {
  return await productModel.find();
}

async function createProduct(product: IProduct) {
  const exist = await getProduct(product.productId);
  return isEmpty(exist) ? await productModel.create(product) : exist;
}

async function updateProduct(product: IProduct) {
  return await productModel.findOneAndUpdate({ productId : product.productId }, product, {new : true});
}

async function deleteProduct(productId: string) {
  const result = await productModel.deleteOne({ productId });
  return Boolean(Number(result.ok));
}

export { getProduct, getProductList, createProduct, updateProduct, deleteProduct };
