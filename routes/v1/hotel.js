const {
  validateHotelUserPayload,
  validateHotelPayload,
  validateHotelParam
} = require('../../helpers/hotels');
const { customError } = require('../../helpers/request');
const HotelController = require('../../controllers/Hotel');

module.exports = [{
  method: 'GET',
  path: '/hotels',
  handler: HotelController.getAll
}, {
  method: 'POST',
  path: '/hotels',
  options: {
    validate: {
      payload: validateHotelPayload,
    }
  },
  handler: async (request) => {
    return await HotelController.createHotel(request.payload);
  }
}, {
  method: 'GET',
  path: '/hotels/{hotelId}/users',
  options: {
    validate: {
      params: validateHotelParam
    }
  },
  handler: async (request) => {
    return await HotelController.getAllHotelUsers(request.params.hotelId);
  }
}, {
  method: 'POST',
  path: '/hotels/users',
  options: {
    validate: {
      payload: validateHotelUserPayload,
    }
  },
  handler: async (request) => {
    const { error, hotelUser } = await HotelController.createHotelUser(request.payload);

    if (error) return customError(`Sorry, cannot find hotel or user`);

    return hotelUser;
  }
}]