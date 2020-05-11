const models = require('../models');

const HotelController = require('./Hotel');

const { Booking, Guest, RatePlan } = models;

module.exports = (() => {
  return {
    getAllBookings,
    createbooking,
    findBooking
  }

  async function findBooking({ params }) {
    const booking = await Booking.findOne({
      where: {
        hotelId: params.hotelId,
        id: params.bookingId
      },
      include: [
        Guest,
        RatePlan
      ]
    });

    if (!booking) return { error: true };

    return { error: false, booking };
  }

  async function getAllBookings({ params }) {
    return await Booking.findAll({
      where: {
        hotelId: params.hotelId
      },
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