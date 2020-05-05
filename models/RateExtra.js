'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('rate_extra', {
    name: DataTypes.STRING,
    rate: DataTypes.FLOAT
  }, {});
};