'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('roomtype', {
    name: DataTypes.STRING,
    ratePlanId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    tableName: 'roomtype',
  });
};