import { IProduct } from '../interfaces';
import * as productsModel from '../models/Products.model';

export async function createProduct({ name, amount }: IProduct) {
  const product = await productsModel.insertProduct({ name, amount });
  return { type: 201, message: product };
} 

export async function findAllProducts() {
  const products = await productsModel.findAllProducts();
  return { type: 200, message: products };
}