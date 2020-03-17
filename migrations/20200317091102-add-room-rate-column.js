'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'roomrates',
      'hotelId',
      Sequelize.INTEGER
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'roomrates',
      'hotelId',
      Sequelize.INTEGER
    );
  }
};
