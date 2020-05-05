const jwtPlugin = require('hapi-auth-jwt2').plugin;

const models = require('../models');
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
    verifyOptions: {
      algorithms: [ 'HS256' ]
    }
  })
  // Default all routes to require JWT and opt out for public routes
  server.auth.default('jwt')
}