const { userRoutes } = require('./user');
const { authenticateRoute } = require('./authenticate');
const { hotelChainRoutes } = require('./hotelChains');
// const { hotelRoutes } = require('./hotels');

const { roomFeatureRoutes } = require('./features');
const { bedConfigRoutes } = require('./bedConfig');
const { ratePlanRoutes } = require('./ratePlan');

const hotelRoute = require('./v1/hotel');
const roomTypeRoute = require('./v1/room-type');

exports.configureRoutes = (server) => {

  return server.route([
    ...userRoutes,
    ...authenticateRoute,
    ...hotelChainRoutes,
    // ...hotelRoutes,
    ...roomFeatureRoutes,
    ...bedConfigRoutes,
    ...ratePlanRoutes,

    // Refactor
    ...hotelRoute,
    ...roomTypeRoute
  ])
}