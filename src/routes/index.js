const { userRoutes } = require('./user');

exports.configureRoutes = (server) => {
  return server.route([
    ...userRoutes
  ])
}