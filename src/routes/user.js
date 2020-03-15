const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');

const models = require('../../models');
const userHelper = require('../helpers/userHelper');

const User = models.User;

exports.userRoutes = [{
    method: 'GET',
    path: '/users',
    handler: async (request) => {
      return await User.findAll();
    },
  }, {
    method: 'POST',
    path: '/users',
    options: {
      validate: {
        payload: userHelper.userValidation
      }
    },
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
    }
  }, {
    method: 'GET',
    path: '/users/{userId}',
    options: {
      validate: {
        params: userHelper.validateUserId
      }
    },
    handler: async(request) => {
      const user = await User.findOne({ where: { id: request.params.userId }});

      if (!user) return Boom.notFound();

      return user;
    },
  },
  {
    method: 'PUT',
    path: '/users/{userId}',
    options: {
      validate: {
        params: userHelper.validateUserId
      }
    },
    handler: async(request) => {
      const user = await User.findOne({ where: { id: request.params.userId }});

      if (!user) return Boom.notFound();

      delete request.payload.password;

      user.update(request.payload)

      return user.save();
    },
  }
];