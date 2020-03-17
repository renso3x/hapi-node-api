'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('hotelroomtyperate', {
    hotelRoomId: DataTypes.INTEGER,
    periodRatePeriodId: DataTypes.INTEGER,
    periodFrom: DataTypes.DATE,
    periodTo: DataTypes.DATE
  }, {
    table: 'hotelroomtyperate'
  });
};