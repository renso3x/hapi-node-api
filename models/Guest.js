'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('guests', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    hotelId: DataTypes.STRING,
    // TODO: supply this details
    bookingSource: DataTypes.STRING, // might be an enum ('fb','website')
    upload: DataTypes.STRING
  }, {});
};