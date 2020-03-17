'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('roomrates', {
    rate: {
      type: DataTypes.DECIMAL(10, 2)
    },
    currency: DataTypes.STRING,
    hotelId: {
      type: DataTypes.INTEGER
    }
  }, {});
};