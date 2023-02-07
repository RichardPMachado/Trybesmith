import { Response, Request } from 'express';
import * as UsersService from '../services/Users.service';

export async function createUser(req: Request, res: Response) {
  const { userName, vocation, level, password } = req.body;
  const { type, message } = await UsersService.createUser({ userName, vocation, level, password });
  return res.status(type).json(message);
}

export async function getAllUsers(_req: Request, res: Response) {
  const { type, message } = await UsersService.findAllUsers();
  return res.status(type).json(message);
}