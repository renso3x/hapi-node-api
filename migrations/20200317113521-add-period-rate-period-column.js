'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'periodroomrates',
      'hotelId',
      Sequelize.INTEGER
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'periodroomrates',
      'hotelId',
      Sequelize.INTEGER
    );
  }
};
