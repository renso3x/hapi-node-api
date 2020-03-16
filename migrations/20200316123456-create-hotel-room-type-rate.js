'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotelroomtyperate', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotelRoomId: {
        type: Sequelize.INTEGER
      },
      periodRatePeriodId: {
        type: Sequelize.INTEGER
      },
      periodFrom: {
        type: Sequelize.DATE
      },
      periodTo: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('hotelroomtyperate');
  }
};