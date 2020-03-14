const { userRoutes } = require('./user');
const { authenticateRoute } = require('./authenticate');

exports.configureRoutes = (server) => {
  return server.route([
    ...userRoutes,
    ...authenticateRoute
  ])
}