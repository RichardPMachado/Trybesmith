import { Request, Response } from 'express';
import OrdersService from '../services/Orders.service';

async function getAllOrders(req: Request, res: Response) {
  const { type, message } = await OrdersService.findAllOrders();
  return res.status(type).json(message);
}

export default {
  getAllOrders,
};