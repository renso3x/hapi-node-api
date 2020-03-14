const jwtPlugin = require('hapi-auth-jwt2').plugin;
const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../../models');
const userHelper = require('./userHelper');

const User = models.User;
const JWT_KEY = process.env.JWT_KEY;

const validate = async (credentials) => {
  const user = await User.findOne({
    where: { email: credentials.email },
    raw: true
  });

  if (!user) return { isValid: false };

  return { isValid: true , credentials };
}

exports.configureAuth = async (server) => {
  await server.register(jwtPlugin)
  server.auth.strategy('jwt', 'jwt', {
    key: JWT_KEY,
    validate,
    verifyOptions: { algorithms: [ 'HS256' ] }
  })

  // Default all routes to require JWT and opt out for public routes
  server.auth.default('jwt')
}

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

  const token = jwt.sign(credentials, JWT_KEY, { algorithm: 'HS256', expiresIn: '1h' })

  return { token };
}