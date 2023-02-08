import Joi from 'joi';

const createSchema = Joi.object({
  name: Joi.string().min(8).required().messages({
    'string.min': '"name" length must be at least 3 characters long',
    'string.required': '"displayName" is required',
  }),
  amount: Joi.string().min(3).required().messages({
    string: '"amount" must be a string',
    'string.min': '"amount" length must be at least 3 characters long',
    'string.required': '"email" is required',
  }),
});

export default createSchema;