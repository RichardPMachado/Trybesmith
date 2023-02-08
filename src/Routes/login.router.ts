import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import LoginMideleware from '../middlewares/login.middleware';

const loginRouter = Router();

loginRouter.post(
  '/',
  LoginMideleware.validateLogin,
  (req, res) => LoginController.findByNameAndPassword(req, res), 
);
// usersRouter.post('/', (req, res) => UsersController.createUser(req, res));

export default loginRouter;