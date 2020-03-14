const _ = require('lodash');
const models = require('../../models');

const User = models.User;

exports.userAttributes = (user) => _.omit(user, ['password']);

exports.findUserDetailsByEmail = async (email) => {
  const user = await User.findAll({
    where: { email }
  })
  return user.length > 0 ;
}