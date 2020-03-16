const Joi = require('@hapi/joi');

exports.validateHotelPayload = Joi.object({
  code: Joi.string(),
  name: Joi.string().required(),
  address: Joi.string().required(),
  postcode: Joi.string(),
  city: Joi.string(),
  url: Joi.string()
});

exports.validateHotelRooms = Joi.object({
  roomNumber: Joi.number().required(),
  roomFloor: Joi.number(),
  roomCount: Joi.number(),
});

exports.validateRoomQuery = Joi.object({
  hotel: Joi.number().required()
});

exports.validatePutHotelRoomQuery = Joi.object({
  hotel: Joi.number().required(),
  room: Joi.number().required()
});