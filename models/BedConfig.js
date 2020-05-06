'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('hotelbedconfig', {
    name: DataTypes.STRING
  }, {
  });
};