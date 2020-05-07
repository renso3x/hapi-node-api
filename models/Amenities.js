'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('amenities', {
    name: DataTypes.STRING
  }, {});
};