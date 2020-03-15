const { userRoutes } = require('./user');
const { authenticateRoute } = require('./authenticate');
const { hotelChainRoutes } = require('./hotelChains');
const { hotelRoutes } = require('./hotels');

exports.configureRoutes = (server) => {
  return server.route([
    ...userRoutes,
    ...authenticateRoute,
    ...hotelChainRoutes,
    ...hotelRoutes
  ])
}