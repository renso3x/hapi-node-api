'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('bookings', {
    hotelId: DataTypes.INTEGER,
    ratePlanId: DataTypes.INTEGER,
    guestId: DataTypes.DATE,
    dateFrom: DataTypes.DATE,
    dateTo: DataTypes.DATE,
  }, {});
};