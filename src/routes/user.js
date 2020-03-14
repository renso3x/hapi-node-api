const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const models = require('../../models');
const userHelper = require('../helpers/userHelper');

const User = models.User;

exports.userValidation = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

exports.userRoutes = [
  {
    method: 'GET',
    path: '/users',
    handler: async (request) => {
      return await User.findAll();
    },
  }, {
    method: 'POST',
    path: '/users',
    handler: async (request) => {
      try {
        const isUserExist = await User.findAll({
          where: { email: request.payload.email }
        });

        if (isUserExist.length > 0) return Boom.badRequest('Email does exist, please use another email.');

        const { password, ...rest } = request.payload;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ password: hashedPassword, ...rest });

        return userHelper.userAttributes(JSON.parse(JSON.stringify(newUser)));

      } catch (e) {
        return Boom.badRequest(e.message);
      }
    },
    options: {
      validate: {
        payload: exports.userValidation
      }
    }
  }
];