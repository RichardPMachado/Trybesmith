import { IProduct } from '../interfaces';
import * as ProductsModel from '../models/Products.model';
import validateInputs from './validations/validateInputs';

export async function createProduct({ name, amount }: IProduct) {
  const { type, message } = validateInputs.createProductsValidation({ name, amount });
  
  if (type) return { type, message: { message } };

  const product = await ProductsModel.insertProduct({ name, amount });
  return { type: 201, message: product };
} 

export async function findAllProducts() {
  const products = await ProductsModel.findAllProducts();
  return { type: 200, message: products };
}