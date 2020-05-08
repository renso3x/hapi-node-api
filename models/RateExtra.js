'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('rateextra', {
    name: DataTypes.STRING,
    rate: DataTypes.FLOAT
  }, {});
};