
const prefix = '/hotels/{hotelId}';

module.exports = [{
  method: 'GET',
  path: `${prefix}/bookings`,
  handler: async(request) => {
    return 'Get bookings from hote'
  }
}]