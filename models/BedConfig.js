'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('bedconfig', {
    name: DataTypes.STRING
  }, {
  });
};