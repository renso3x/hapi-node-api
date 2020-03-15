'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('hotelchainsuser', {
    hotelChainId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    tableName: 'hotelchainuser'
  });
};