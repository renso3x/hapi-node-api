const Joi = require('@hapi/joi');
const models = require('../../models');

const Hotels = models.Hotels;

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

exports.validateHotelQuery = Joi.object({
  hotel: Joi.number().required()
});

exports.validatePutHotelRoomQuery = Joi.object({
  hotel: Joi.number().required(),
  room: Joi.number().required()
});

exports.validateRoomRate = Joi.object({
  rate: Joi.number().required(),
  currency: Joi.string().required(),
})

exports.ifHotelExist = async (request) => {
  return await Hotels.findOne({ where: { id: request.query.hotel }});
}

exports.validatePostRoomRate = {
  payload: exports.validateRoomRate,
  query: exports.validateHotelQuery,
}

exports.validatePutRoomRate = {
  payload: Joi.object({
    rate: Joi.number().required(),
    currency: Joi.string().required(),
  }),
  query: exports.validateHotelQuery,
  params: Joi.object({
    roomRateId: Joi.number().required(),
  })
}

