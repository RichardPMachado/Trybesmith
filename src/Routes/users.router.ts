import { Router } from 'express';
import * as UsersController from '../controllers/Users.controller';
import userMiddleware from '../middlewares/user.middleware';

const usersRouter = Router();

usersRouter.get(
  '/',
  userMiddleware.validateUsers,
  (req, res) => UsersController.getAllUsers(req, res),
);
usersRouter.post(
  '/',
  userMiddleware.validateUsers,
  (req, res) => UsersController.createUser(req, res),
);

export default usersRouter;