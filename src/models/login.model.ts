import { IUser } from '../interfaces';
import connection from './connection';

async function findByNameAndPassword(username: string, password: string) {
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
  const value = [username, password];
  const [result] = await connection.execute(query, value);
  const [user] = result as IUser[];
  return user;
}

export default {
  findByNameAndPassword,
};