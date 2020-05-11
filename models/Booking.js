'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('bookings', {
    hotelId: DataTypes.INTEGER,
    ratePlanId: DataTypes.INTEGER,
    guestId: DataTypes.INTEGER,
    dateFrom: DataTypes.DATE,
    dateTo: DataTypes.DATE,
  }, {});
};