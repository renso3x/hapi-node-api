const _ = require('lodash');
const Joi = require('@hapi/joi');
const models = require('../../models');

const User = models.User;

exports.userAttributes = (user) => _.omit(user, ['password']);

exports.findUserDetailsByEmail = async (email) => {
  const user = await User.findAll({
    where: { email }
  })
  return user.length > 0;
}

exports.validateUserId = Joi.object({
  userId: Joi.number().min(0).required()
});

exports.userValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
})
