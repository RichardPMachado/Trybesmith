import { Router } from 'express';
import * as UsersController from '../controllers/Users.controller';

const usersRouter = Router();

usersRouter.get('/', (req, res) => UsersController.getAllUsers(req, res));
usersRouter.post('/', (req, res) => UsersController.createUser(req, res));

export default usersRouter;