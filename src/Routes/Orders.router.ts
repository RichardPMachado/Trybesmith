import { Router } from 'express';
import OrdersController from '../controllers/Orders.controller';

const ordersRouter = Router();

ordersRouter.get('/', (req, res) => OrdersController.getAllOrders(req, res));
// ordersRouter.post('/', (req, res) => OrdersController.createProduct(req, res));

export default ordersRouter;