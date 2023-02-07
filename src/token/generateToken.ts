import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

const TOKEN_SECRET: string = process.env.TOKEN_SECRET || 'hojeVai';

export default function generateToken(payload: IUser) {
  const token = jwt.sign({ payload }, TOKEN_SECRET);
  return token;
}
