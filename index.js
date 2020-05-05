'use strict';

require('dotenv').config();

const Hapi = require('@hapi/hapi');

const { configureAuth } = require('./middlewares/auth');
const { logger } = require('./middlewares/logger');
const { configureRoutes } = require('./routes');

const server = Hapi.server({
  port: 4000,
  host: 'localhost',
  routes: { cors: { origin: ["*"] } }
});

const init = async () => {
  await configureAuth(server);
  await logger(server);
  await configureRoutes(server);

  await server.start();

  console.log('Server running on %s', server.info.uri)
};

init();