import { Router } from 'express';
import * as ProductsController from '../controllers/Products.controller';
import productsMiddleware from '../middlewares/products.middleware';

const productsRouter = Router();

productsRouter.get(
  '/',
  productsMiddleware.validateProducts,
  (req, res) => ProductsController.getAllProducts(req, res),
);
productsRouter.post(
  '/',
  productsMiddleware.validateProducts,
  (req, res) => ProductsController.createProduct(req, res),
);

export default productsRouter;