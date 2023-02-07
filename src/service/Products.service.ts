import { IProduct } from '../interfaces';
import * as productsModel from '../models/Products.model';

export async function createProduct({ name, amount }: IProduct) {
  const product = await productsModel.insertProduct({ name, amount });
  return { type: null, message: product };
} 