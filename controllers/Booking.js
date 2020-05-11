const models = require('../models');

const HotelController = require('./Hotel');

const { Booking } = models;

module.exports = (() => {
  return {
    getAllBookings
  }

  async function getAllBookings({ params }) {
    return await HotelController.findAssocitation(params.hotelId, {
      model: Booking
    })
  }
})();