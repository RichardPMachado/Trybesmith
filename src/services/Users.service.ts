import { IUser } from '../interfaces';
import * as UsersModel from '../models/Users.model';
import generateToken from '../token/generateToken';

export async function createUser({ username, vocation, level, password }: IUser) {
  const user = await UsersModel.insertUser({ username, vocation, level, password });
  return { type: 201, message: generateToken(user) };
} 

export async function findAllUsers() {
  const users = await UsersModel.findAllUsers();
  return { type: 200, message: users };
}