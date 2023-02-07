import { 
  // RowDataPacket,
  ResultSetHeader } from 'mysql2';

import { IUser } from '../interfaces';
import connection from './connection';

export async function insertUser(users: IUser): Promise<IUser> {
  const { userName, vocation, level, password } = users;

  const query = `INSERT INTO Trybesmith.users
    (userName, vocation, level, password) VALUES (?, ?. ?, ?)`;
  const values = [userName, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId } = result;

  const newUser: IUser = { id: insertId, userName, vocation, level, password };
  return newUser;
}

export async function findAllUsers(): Promise<IUser[]> {
  const query = 'SELECT * FROM Trybesmith.users';
  const [result] = await connection.execute(query);
  const users = result as IUser[];
  return users;
}