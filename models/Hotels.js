'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('hotels', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    postcode: DataTypes.STRING,
    city: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
};