'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('rateplanstay', {
    ratePlanId: DataTypes.INTEGER,
    min_nights: DataTypes.INTEGER,
    max_nights: DataTypes.INTEGER,
    applied_on: DataTypes.DATE,
  }, {
    tableName: 'rateplanstay'
  });
};
