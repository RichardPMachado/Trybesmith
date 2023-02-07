import { IUser } from '../interfaces';
import * as UsersModel from '../models/Users.model';

export async function createUser({ userName, vocation, level, password }: IUser) {
  const user = await UsersModel.insertUser({ userName, vocation, level, password });
  return { type: 201, message: user };
} 

export async function findAllUsers() {
  const users = await UsersModel.findAllUsers();
  return { type: 200, message: users };
}