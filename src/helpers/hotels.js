const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
const models = require('../../models');

const Hotels = models.Hotels;
const PeriodRoomRate = models.PeriodRoomRate;
const HotelRooms = models.HotelRooms;

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

exports.validatePeriodRoomRatePayload = Joi.object({
  periodName: Joi.string().required(),
  roomRateId: Joi.number().required(),
  description: Joi.string(),
})

exports.validateRoomRatePeriods = {
  payload: exports.validatePeriodRoomRatePayload,
  query: exports.validateHotelQuery,
}

exports.validatePutRoomRatePeriods = {
  payload: exports.validatePeriodRoomRatePayload,
  query: exports.validateHotelQuery,
  params: Joi.object({
    roomRatePeriodId: Joi.number().required(),
  })
}

exports.validateRoomRateTypes = {
  payload: Joi.object({
    hotelRoomId: Joi.number().required(),
    periodRatePeriodId: Joi.number().required(),
    periodFrom: Joi.date().format('YYYY-MM-DD').required(),
    periodTo: Joi.date().format('YYYY-MM-DD').required()
  }),
}

exports.checkHotelRoom = async (request) => {
  return await HotelRooms.findOne({ where: { id: request.payload.hotelRoomId }});
}

exports.checkRatePeriod = async (request) => {
  return await PeriodRoomRate.findOne({ where: { id: request.payload.periodRatePeriodId }});
}

exports.validatePutRoomRateTypes = {
  payload: exports.validateRoomRateTypes.payload,
  params: Joi.object({
    roomTypeId: Joi.number().required()
  })
}
