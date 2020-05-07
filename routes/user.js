const bcrypt = require('bcrypt');

const models = require('../models');
const userHelper = require('../helpers/userHelper');
const requestHelper = require('../helpers/request');

const User = models.User;

exports.userRoutes = [{
  method: 'GET',
  path: '/users',
  handler: async () => {
    return await User.findAll();
  },
}, {
  method: 'POST',
  path: '/users',
  options: {
    auth: false,
    validate: {
      payload: userHelper.userValidation
    }
  },
  handler: async (request) => {
    try {
      const isUserExist = await User.findAll({
        where: { email: request.payload.email }
      });

      if (isUserExist.length > 0) return requestHelper.customError('Email does exist, please use another email.');

      const { password, ...rest } = request.payload;

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({ password: hashedPassword, ...rest });

      return userHelper.userAttributes(JSON.parse(JSON.stringify(newUser)));

    } catch (e) {
      return requestHelper.customError(e.message);
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

    if (!user) return requestHelper.notFound();

    return await userHelper.getHotelChainOfUser(user.id);
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

    if (!user) return requestHelper.notFound();

    delete request.payload.password;

    user.update(request.payload)

    return user.save();
  },
}];