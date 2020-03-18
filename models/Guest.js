'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('guests', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    idNumber: DataTypes.STRING
  }, {});
};