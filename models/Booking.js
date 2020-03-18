'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('bookings', {
    guestId: DataTypes.INTEGER,
    hotelId: DataTypes.INTEGER,
    roomTypeRateId: DataTypes.INTEGER,
    bookingFrom: {
      type: DataTypes.DATE
    },
    bookingTo: {
      type: DataTypes.DATE
    },
  }, {});
};