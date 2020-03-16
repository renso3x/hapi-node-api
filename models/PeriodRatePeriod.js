'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('periodroomrates', {
    periodName: DataTypes.STRING,
    roomRateId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
};