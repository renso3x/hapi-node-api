const { userRoutes } = require('./user');
const { authenticateRoute } = require('./authenticate');
const { hotelChainRoutes } = require('./hotelChains');

const { roomFeatureRoutes } = require('./features');
const { bedConfigRoutes } = require('./bedConfig');

const hotelRoute = require('./v1/hotel');
const roomTypeRoute = require('./v1/room-type');
const ratePlanRoute = require('./v1/rate-plan');

exports.configureRoutes = (server) => {

  return server.route([
    ...userRoutes,
    ...authenticateRoute,
    ...hotelChainRoutes,
    ...roomFeatureRoutes,
    ...bedConfigRoutes,

    // Refactor
    ...hotelRoute,
    ...roomTypeRoute,
    ...ratePlanRoute
  ])
}