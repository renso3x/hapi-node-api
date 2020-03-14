'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('hotelchains', {
    hotel_chain_code: DataTypes.STRING,
    hotel_chain_name: DataTypes.STRING
  }, {});
};