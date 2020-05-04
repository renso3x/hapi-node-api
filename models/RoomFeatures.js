'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('room_features', {
    name: DataTypes.STRING
  }, {});
};