'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('hotelchains', {
    chainCode: DataTypes.STRING,
    chainName: DataTypes.STRING,
  }, {});
};