const { userRoutes } = require('./user');
const { authenticateRoute } = require('./authenticate');
const { hotelChainRoutes } = require('./hotelChains');
const { hotelRoutes } = require('./hotels');

// Refactor v2
const { roomFeatureRoutes } = require('./features');
const { bedConfigRoutes } = require('./bedConfig');

exports.configureRoutes = (server) => {
  return server.route([
    ...userRoutes,
    ...authenticateRoute,
    ...hotelChainRoutes,
    ...hotelRoutes,
    ...roomFeatureRoutes,
    ...bedConfigRoutes
  ])
}