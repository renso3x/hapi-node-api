'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('roomtype', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    hotelId: DataTypes.INTEGER,
    rate: DataTypes.INTEGER,
  }, {
    tableName: 'roomtype',
  });
};