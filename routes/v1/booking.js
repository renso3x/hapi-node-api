const {
  validateHotelParam,
  validateHotelBookingPayload
} = require('../../helpers/hotels');
const { notFound, customError } = require('../../helpers/request');
const BookingController = require('../../controllers/Booking');

const prefix = '/hotels/{hotelId}';

module.exports = [{
  method: 'GET',
  path: `${prefix}/bookings`,
  options: {
    validate: {
      params: validateHotelParam
    }
  },
  handler: async(request) => {
    return await BookingController.getAllBookings(request);
  }
}, {
  method: 'POST',
  path: `${prefix}/bookings`,
  options: {
    validate: {
      params: validateHotelParam,
      payload: validateHotelBookingPayload,
    }
  },
  handler: async(request) => {
    const { error, booking } = await BookingController.createbooking(request);

    if (error) return customError('Hotel not found');

    return booking;
  }
}]