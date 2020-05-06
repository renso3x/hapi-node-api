'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('rateplan', {
    code: DataTypes.STRING, //name
    inclusions: {
      type: DataTypes.ENUM('breakfast', 'lunch', 'dinner', 'all incusive'),
      allowNull: false
    },
    min_adult: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    max_adult: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    min_child: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    max_child: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    default_rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    }
  }, {
    tableName: 'rateplan'
  });
};