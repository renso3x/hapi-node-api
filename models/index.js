'use strict';
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(
  process.env.DB_NAME || config.database,
  process.env.DB_USERNAME || config.username,
  process.env.DB_PASSWORD || config.password,
  {
    dialect: config.dialect,
    host: process.env.DB_URL || config.host,
    port: 3306,
    logging: false,
    pool: {
      max: 30,
      min: 1,
      idle: 10000
    },
    retry: {
      match: [
        Sequelize.ConnectionError,
        Sequelize.ConnectionRefusedError,
        Sequelize.ConnectionTimedOutError,
        Sequelize.OptimisticLockError,
        Sequelize.TimeoutError
      ],
      max: 10,
      timeout: 10000
    }
  }
);

sequelize.authenticate().then(function(err) {
  if (!!err) {
    console.log('Unable to connect to the database:', err);
    console.log('Name: ' + config.database);
    console.log('User: ' + config.username);
    console.log('Password: ' + config.password);
    console.log('Host: ' + config.host);
    console.log('Port: ' + config.port);
  } else {
    console.log('env: ' + env);
    console.log('Host: ' + config.host);
    console.log('Name: ' + config.database);
    console.log('User: ' + config.username);
    console.log('Port: ' + config.port);
    console.log('Connection has been established successfully.');
  }
});

const models = [
  'User',
  'Hotels',
  'BedConfig',
  'RatePlan',
  'RoomType',
  'CustomRatePlan',
  'Amenities',
  'HotelUsers'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// Relationships
(function(m) {
  m.Hotels.hasMany(m.HotelUsers);
  m.HotelUsers.belongsTo(m.User);

  m.Hotels.hasMany(m.RoomType);
})(module.exports);

module.exports.db = sequelize;
