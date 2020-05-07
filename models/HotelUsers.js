'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('hotelusers', {
    userId: {
      type: DataTypes.INTEGER
    },
    hotelId: {
      type: DataTypes.INTEGER
    },
  }, {});
};