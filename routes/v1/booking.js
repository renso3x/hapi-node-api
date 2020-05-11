const { validateHotelParam } = require('../../helpers/hotels')
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
}]