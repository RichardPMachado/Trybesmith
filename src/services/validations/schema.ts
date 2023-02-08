import Joi from 'joi';

const ProductsSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': '"name" must be a string',
    'string.min': '"name" length must be at least 3 characters long',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.base': '"amount" must be a string',
    'string.min': '"amount" length must be at least 3 characters long',
  }),
});

const UsersSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.base': '"username" must be a string',
    'string.min': '"username" length must be at least 3 characters long',
  }),
  vocation: Joi.string().min(3).required().messages({
    'string.base': '"vocation" must be a string',
    'string.min': '"vocation" length must be at least 3 characters long',
  }),
  level: Joi.number().greater(0).required()
    .messages({
      'number.base': '"level" must be a number',
      'number.greater': '"level" must be greater than or equal to 1',
    }),
  password: Joi.string().min(8).required().messages({
    'string.base': '"password" must be a string',
    'string.min': '"password" length must be at least 8 characters long',
  }),
});

export default {
  ProductsSchema,
  UsersSchema,
};