'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('custom_rate_plan', {
    rate_plan_id: DataTypes.INTEGER,
    rate: DataTypes.FLOAT,
    applied: DataTypes.DATE
  }, {});
};