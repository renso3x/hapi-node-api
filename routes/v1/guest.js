const {
  validateHotelParam,
  validateHotelGuestPayload,
} = require('../../helpers/hotels');
const { customError, notFound } = require('../../helpers/request');
const GuestController = require('../../controllers/Guest');

const prefix = '/hotels/{hotelId}';

module.exports = [{
  method: 'GET',
  path: `${prefix}/guests`,
  options: {
    validate: {
      params: validateHotelParam
    }
  },
  handler: async (request) => await GuestController.getAll(request.params.hotelId)
}, {
  method: 'POST',
  path: `${prefix}/guests`,
  options: {
    validate: {
      params: validateHotelParam,
      payload: validateHotelGuestPayload
    }
  },
  handler: async (request) => {
    const { error, guest } = await GuestController.create(request);

    if (error) customError('Hotel doesn\'t exist');

    return guest;
  }
}, {
  method: 'PUT',
  path: `${prefix}/guests`,
  options: {
    validate: {
      params: validateHotelParam,
      payload: validateHotelGuestPayload
    }
  },
  handler: async (request) => {
    const { error, guest } = await GuestController.update(request);

    if (error) return notFound();

    return guest;
  }
}]