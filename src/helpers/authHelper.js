const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../../models');
const userHelper = require('./userHelper');

const User = models.User;
const JWT_KEY = process.env.JWT_KEY;

exports.login = async (email, password) => {
  const isExist = await userHelper.findUserDetailsByEmail(email);

  if (!isExist) return Boom.notFound();

  const user = await User.findAll({
    where: { email },
    raw: true,
  });

  const isValid = await bcrypt.compare(password, user[0].password);

  if (!isValid) return Boom.badRequest('Invalid login credentials.');

  const credentials = { email };

  const token = makeJWTSignToken(credentials);

  return { token };
}

const makeJWTSignToken = (credentials) => jwt.sign(credentials, JWT_KEY, { algorithm: 'HS256', expiresIn: '7d' });