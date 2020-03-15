'use strict'
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(128),
    },
    lastName: {
      type: DataTypes.STRING(128),
    },
    email: {
      type: DataTypes.STRING(128),
    },
    password: {
      type: DataTypes.STRING(128),
    },
    suspended: {
      type: DataTypes.INTEGER(1),
      defaultValue: "0"
    },
  }, {
    indexes: [ { fields: [ 'email' ] } ]
  }, {
    hooks: {
      beforeFind: function(options) {
        if (!options.attributes) {
          options.attributes = [
            'id',
            'firstName',
            'lastName',
            'email',
            'suspended'
          ];
        }

        return options;
      }
    }
  });
};