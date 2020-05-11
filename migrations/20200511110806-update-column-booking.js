'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return Promise.all([
      queryInterface.addColumn('bookings', 'dateFrom', {
        type: Sequelize.DATE,
        allowNull: false,
      }),
      queryInterface.addColumn('bookings', 'dateTo', {
        type: Sequelize.DATE,
        allowNull: false,
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('bookings', 'dateFrom'),
      queryInterface.removeColumn('bookings', 'dateTo'),
    ])
  }
};
