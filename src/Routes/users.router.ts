import { Router } from 'express';
import * as UsersController from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.get('/', (req, res) => usersController.getAllUsers(req, res));
usersRouter.post('/', (req, res) => usersController.createUser(req, res));

export default usersRouter;