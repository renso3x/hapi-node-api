'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RoomPlans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      inclusions: {
        type: Sequelize.STRING
      },
      min_adult: {
        type: Sequelize.INTEGER
      },
      max_adult: {
        type: Sequelize.INTEGER
      },
      min_child: {
        type: Sequelize.INTEGER
      },
      max_child: {
        type: Sequelize.INTEGER
      },
      default_rate: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RoomPlans');
  }
};