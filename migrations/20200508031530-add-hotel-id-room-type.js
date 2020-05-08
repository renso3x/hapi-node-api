'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('roomType', 'hotelId', {
        type: Sequelize.INTEGER
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('roomType', 'hotelId')
    ])
  }
};
