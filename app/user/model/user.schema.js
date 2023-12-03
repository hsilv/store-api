const Joi = require('joi');

const id = Joi.number().integer().min(1);
const email = Joi.string().email();
const password = Joi.string().max(255);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const putProductSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  email,
  password,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema, putProductSchema };
