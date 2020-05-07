'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('customrateplan', {
    ratePlanId: DataTypes.INTEGER,
    rate: DataTypes.FLOAT,
    applied: DataTypes.DATE
  }, {});
};