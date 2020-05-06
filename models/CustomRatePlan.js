'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('customrateplan', {
    rate_plan_id: DataTypes.INTEGER,
    rate: DataTypes.FLOAT,
    applied: DataTypes.DATE
  }, {});
};