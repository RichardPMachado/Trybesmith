import { IUser } from '../interfaces';
import * as UsersModel from '../models/Users.model';
import generateToken from '../token/generateToken';
import validateInputs from './validations/validateInputs';

export async function createUser({ username, vocation, level, password }: IUser) {
  const { type, message } = validateInputs
    .createUsersValidation({ username, vocation, level, password });
  console.log(message);
  
  if (type) return { type, message };
  const user = await UsersModel.insertUser({ username, vocation, level, password });
  return { type: 201, message: generateToken(user) };
} 

export async function findAllUsers() {
  const users = await UsersModel.findAllUsers();
  return { type: 200, message: users };
}