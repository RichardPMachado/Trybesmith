import { Router } from 'express';
import * as ProductsController from '../controllers/Products.controller';

const productsRouter = Router();

productsRouter.get('/', (req, res) => ProductsController.getAllProducts(req, res));
productsRouter.post('/', (req, res) => ProductsController.createProduct(req, res));

export default productsRouter;