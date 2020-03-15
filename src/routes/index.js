const { userRoutes } = require('./user');
const { authenticateRoute } = require('./authenticate');
const { hotelChainRoutes } = require('./hotelChains');

exports.configureRoutes = (server) => {
  return server.route([
    ...userRoutes,
    ...authenticateRoute,
    ...hotelChainRoutes
  ])
}