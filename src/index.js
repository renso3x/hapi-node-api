'use strict';
require('dotenv/config');
const Hapi = require('@hapi/hapi');
const { configureRoutes } = require('./routes');
const { configureAuth } = require('./helpers/authHelper');

const server = Hapi.server({
  port: 4000,
  host: 'localhost'
});

const init = async () => {
  await configureAuth(server);
  await configureRoutes(server);

  await server.start();

  console.log('Server running on %s', server.info.uri)
};

init();