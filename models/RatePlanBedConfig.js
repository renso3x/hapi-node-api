'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('rate_plan_bed_config', {
    rate_plan_id: DataTypes.INTEGER,
    bed_config_id: DataTypes.INTEGER
  }, {});
};