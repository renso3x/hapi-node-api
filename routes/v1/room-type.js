const {
  validateHotelParam,
  validateRoomTypePayload,
  validateRoomTypeParams
} = require('../../helpers/hotels');
const requestHelper = require('../../helpers/request');

const prefix = '/hotels/{hotelId}';

const RoomTypeController = require('../../controllers/RoomType');

module.exports = [{
  method: 'GET',
  path: `${prefix}/room-types`,
  options: {
    validate: {
      params: validateHotelParam
    }
  },
  handler: async (request) => {
    const { error, roomTypes } = await RoomTypeController.getRoomTypes(request.params.hotelId);
    if (error) return requestHelper.customError('No room types found');

    return roomTypes;
  }
}, {
  method: 'POST',
  path: `${prefix}/room-types`,
  options: {
    validate: {
      params: validateHotelParam,
      payload: validateRoomTypePayload
    }
  },
  handler: async(request) => {
    const payload = { ...request.payload, hotelId: request.params.hotelId };
    return await RoomTypeController.create(payload);
  }
}, {
  method: 'GET',
  path: `${prefix}/room-types/{roomTypeId}`,
  options: {
    validate: {
      params: validateRoomTypeParams,
    }
  },
  handler: async(request) => {
    const { error, roomType } =  await RoomTypeController.findRoomType(request.params);
    if (error) return requestHelper.customError('No room type found');

    return roomType;
  }
}, {
  method: 'PUT',
  path: `${prefix}/room-types/{roomTypeId}`,
  options: {
    validate: {
      params: validateRoomTypeParams,
      payload: validateRoomTypePayload
    }
  },
  handler: async(request) => {
    const { error, roomType } = await RoomTypeController.updateRoomType(request);

    if (error) return requestHelper.customError('No room type found');

    return roomType;
  }
}, {
  method: 'DELETE',
  path: `${prefix}/room-types/{roomTypeId}`,
  options: {
    validate: {
      params: validateRoomTypeParams,
    }
  },
  handler: async(request) => {
    const { error, roomType } = await RoomTypeController.deleteRoomType(request);

    if (error) return requestHelper.customError('No room type found');

    return roomType;
  }
}]