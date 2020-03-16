'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('hotelrooms', {
    hotelId: DataTypes.INTEGER,
    roomNumber: DataTypes.INTEGER,
    roomFloor: DataTypes.INTEGER,
    roomCount: DataTypes.INTEGER
  }, {});
};