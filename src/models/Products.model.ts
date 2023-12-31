import { 
  // RowDataPacket,
  ResultSetHeader } from 'mysql2';

import { IProduct } from '../interfaces';
import connection from './connection';

export async function insertProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId } = result;

  const newProduct: IProduct = { id: insertId, name, amount };
  return newProduct;
}

export async function findAllProducts(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute(query);  
  const products = result as IProduct[];
  return products;
}
