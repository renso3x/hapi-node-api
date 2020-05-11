const models = require('../models');

const HotelController = require('./Hotel');

const { Booking, Guest, RatePlan } = models;

module.exports = (() => {
  return {
    getAllBookings,
    createbooking,
  }

  async function getAllBookings({ params }) {
    return await Booking.findAll({
      where: {
        hotelId: params.hotelId
      },
      include: [
        Guest,
        RatePlan
      ]
    });
  }

  async function createbooking({ params, payload }) {
    const response = await HotelController.findHotelById(params.hotelId);

    if (response.error) return { error: true }

    const bodyPayload = {
      ...payload,
      hotelId: params.hotelId
    };
    console.log(bodyPayload)

    const booking = await Booking.create(bodyPayload);

    return { error: false, booking };
  }


  //TODO: add logic check if booking is booked with ratePlanId, check the dateFrom & dateTo before booking
  async function checkBookingStatus(payload) {}

})();