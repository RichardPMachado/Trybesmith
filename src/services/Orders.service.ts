import OrdersModel from '../models/Orders.model';

async function findAllOrders() {
  const orders = await OrdersModel.findAllOrders();
  return { type: 200, message: orders };
}

export default {
  findAllOrders,
};