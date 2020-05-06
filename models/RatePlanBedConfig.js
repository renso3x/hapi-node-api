'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('rateplanbedconfig', {
    rate_plan_id: DataTypes.INTEGER,
    bed_config_id: DataTypes.INTEGER
  }, {});
};