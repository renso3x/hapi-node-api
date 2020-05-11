const {
  validateHotelParam,
  validateHotelBookingPayload,
  validateBookingParams
} = require('../../helpers/hotels');
const { customError } = require('../../helpers/request');
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
},  {
  method: 'GET',
  path: `${prefix}/bookings/{bookingId}`,
  options: {
    validate: {
      params: validateBookingParams,
    }
  },
  handler: async(request) => {
    const { error, booking } = await BookingController.findBooking(request);

    if (error) return customError('Booking not found');

    return booking;
  }
}]