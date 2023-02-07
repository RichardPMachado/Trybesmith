import { IProduct } from '../interfaces';
import * as ProductsModel from '../models/Products.model';

export async function createProduct({ name, amount }: IProduct) {
  const product = await ProductsModel.insertProduct({ name, amount });
  return { type: 201, message: product };
} 

export async function findAllProducts() {
  const products = await ProductsModel.findAllProducts();
  return { type: 200, message: products };
}