'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('roomfeature', {
    name: DataTypes.STRING
  }, {
    tableName: 'roomfeature'
  });
};