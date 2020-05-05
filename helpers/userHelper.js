const _ = require('lodash');
const Joi = require('@hapi/joi');
const models = require('../models');

const User = models.User;
const HotelChains = models.HotelChains;
const HotelChainUser = models.HotelChainUser;

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

exports.findById = async (id) => {
  const user = await User.findOne({
    where: { id },
    raw: true
  })
  return user;
}

exports.getHotelChainOfUser = async (userId) => {
  return User.findOne({
    where: {
      id: userId
    },
    include: [
      {
        model: HotelChainUser,
        include: [
          { model: HotelChains }
        ]
      },
    ],
  });
}