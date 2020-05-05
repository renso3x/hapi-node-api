'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('room_type', {
    name: DataTypes.STRING,
    rate_plan: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
};