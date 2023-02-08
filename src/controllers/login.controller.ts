import { Response, Request } from 'express';
import LoginService from '../services/login.service';

// export async function createUser(req: Request, res: Response) {
//   const { username, vocation, level, password } = req.body;
//   const { type, message } = await UsersService.createUser({ username, vocation, level, password });
//   return res.status(type).json({ token: message });
// }

async function findByNameAndPassword(req: Request, res: Response) {
  const { type, message } = await LoginService.findByNameAndPassword(req.body);
  console.log(type);
  return res.status(type).json(message);
}

export default {
  findByNameAndPassword,
};