'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('bookingdetails', {
    bookingId: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: ['newbooking', 'checkout', 'cancelled']
    },
  }, {});
};