import { IProduct, IUser } from '../../interfaces';
import createSchema from './schema';

const createProductsValidation = ({ name, amount }: IProduct) => {
  const { error } = createSchema.ProductsSchema.validate({ name, amount });
  if (error) return { type: 422, message: error.details[0].message };
  
  return { type: null, message: '' };
};

const createUsersValidation = ({ username, vocation, level, password }: IUser) => {
  const { error } = createSchema.UsersSchema.validate({ username, vocation, level, password });
  // console.log(error);
  if (error) return { type: 422, message: error.details[0].message };
  
  return { type: null, message: '' };
};

export default {
  createProductsValidation,
  createUsersValidation,
};