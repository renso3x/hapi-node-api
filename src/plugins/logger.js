const laabr = require('laabr');

const options = {
  formats: { onPostStart: ':time :start :level :message' },
  tokens: { start:  () => '[start]' },
  indent: 0
};

exports.logger = async (server) => {
  await server.register({
    plugin: laabr,
    options
  });
}