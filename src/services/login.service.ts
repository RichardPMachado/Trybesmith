import LoginModel from '../models/login.model';
import generateToken from '../token/generateToken';

// export async function createUser({ username, vocation, level, password }: IUser) {
//   const user = await UsersModel.insertUser({ username, vocation, level, password });
//   return { type: 201, message: generateToken(user) };
// } 

async function findByNameAndPassword(login: { username: string, password: string }) {
  const user = await LoginModel.findByNameAndPassword(login.username, login.password);
  if (!user) return { type: 401, message: { message: 'Username or password invalid' } };
  const token = generateToken(user);
  return { type: 200, message: { token } };
}

export default {
  findByNameAndPassword,
};