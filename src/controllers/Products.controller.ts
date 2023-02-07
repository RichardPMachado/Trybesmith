import { Response, Request } from 'express';
import * as ProductsService from '../services/Products.service';

export async function createProduct(req: Request, res: Response) {
  const { name, amount } = req.body;
  const { type, message } = await ProductsService.createProduct({ name, amount });
  return res.status(type).json(message);
}

export async function getAllProducts(_req: Request, res: Response) {
  const { type, message } = await ProductsService.findAllProducts();
  return res.status(type).json(message);
}