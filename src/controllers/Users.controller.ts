import { Response, Request } from 'express';
import * as UsersService from '../services/Users.service';

export async function createUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  const { type, message } = await UsersService.createUser({ username, vocation, level, password });
  if (type) return res.status(type).json({ message });

  return res.status(type).json({ token: message });
}

export async function getAllUsers(_req: Request, res: Response) {
  const { type, message } = await UsersService.findAllUsers();
  return res.status(type).json(message);
}