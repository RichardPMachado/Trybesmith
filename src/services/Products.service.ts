import { IProduct } from '../interfaces';
import * as productsModel from '../model/Products.model';

export async function createProduct({ name, amount }: IProduct) {
  const product = await productsModel.insertProduct({ name, amount });
  return { type: 201, message: product };
} 