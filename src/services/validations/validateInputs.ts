import { IProduct } from '../../interfaces';
import createSchema from './schema';

const createProductsValidation = ({ name, amount }: IProduct) => {
  const { error } = createSchema.validate({ name, amount });
  // console.log(error);
  if (error) return { type: 422, message: error.details[0].message };
  
  return { type: null, message: '' };
};

export default {
  createProductsValidation,
};