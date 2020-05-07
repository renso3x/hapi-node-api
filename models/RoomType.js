'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('roomtype', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    tableName: 'roomtype',
  });
};