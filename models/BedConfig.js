'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('hotel_bed_config', {
    name: DataTypes.STRING
  }, {
    tableName: 'hotel_bed_config'
  });
};