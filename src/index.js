'use strict';

const Hapi = require('@hapi/hapi');
const { configureRoutes } = require('./routes');

const server = Hapi.server({
  port: 4000,
  host: 'localhost'
});

const init = async () => {
  await configureRoutes(server)
  await server.start();

  console.log('Server running on %s', server.info.uri)
};

init();