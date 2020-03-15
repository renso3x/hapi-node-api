const models = require('../../models');

const hotelHelper = require('../helpers/hotels');

const Hotels = models.Hotels;

exports.hotelRoutes = [{
    method: 'GET',
    path: '/hotels',
    handler: async () => {
      return await Hotels.findAll();
    }
  }, {
    method: 'POST',
    path: '/hotels',
    options: {
      validate: {
        payload: hotelHelper.validateHotelPayload
      }
    },
    handler: async (request) => {
      return await Hotels.create(request.payload);
    }
  }
]