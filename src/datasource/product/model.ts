/* graphql-server-boilerplate
Copyright (c) 2019-present NAVER Corp.
MIT license */
import mongoose, { Document, Schema } from 'mongoose';

const productSchema = new Schema({
  productId: String,
  name: String,
  price : Number,
});

export interface IProduct {
  productId: string;
  name: string;
  age: number;
}

interface IProductModel extends IProduct, Document {}

export const productModel = mongoose.model<IProductModel>('products', productSchema);
