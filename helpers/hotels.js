const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
const models = require('../models');

const Hotels = models.Hotels;
const PeriodRoomRate = models.PeriodRoomRate;
const HotelRooms = models.HotelRooms;
const Booking = models.Booking;

exports.validateHotelRooms = Joi.object({
  roomNumber: Joi.number().required(),
  roomFloor: Joi.number(),
  roomCount: Joi.number(),
});

exports.validateHotelQuery = Joi.object({
  hotel: Joi.number().required(),
  startDate: Joi.date(),
  endDate: Joi.date(),
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

const validateGuestPayload = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string(),
  city: Joi.string(),
  idNumber: Joi.string()
}

exports.validateBookingPayload = {
  payload: Joi.object({
    hotelId: Joi.number().required(),
    roomTypeRateId: Joi.number().required(),
    bookingFrom: Joi.date(),
    bookingTo: Joi.date(),
    guest: Joi.object(validateGuestPayload).required()
  }),
};

exports.validatePutBookingPayload = {
  params: Joi.object({
    bookingId: Joi.number().required()
  }),
  payload: Joi.object({
    roomTypeRateId: Joi.number().required(),
    bookingFrom: Joi.date(),
    bookingTo: Joi.date(),
    guest: Joi.object(validateGuestPayload).required(),
    status: Joi.string().valid('newbooking', 'checkout', 'cancelled')
  }),
}

exports.findBookingById = async (request) => {
  return await Booking.findOne({
    where: { id: request.params.bookingId },
  });
}

// refactor v2
exports.validateHotelUserPayload = Joi.object({
  hotelId: Joi.number().required(),
  userId: Joi.number().required()
})

exports.validateHotelPayload = Joi.object({
  code: Joi.string(),
  name: Joi.string().required(),
  address: Joi.string().required(),
  postcode: Joi.string(),
  city: Joi.string(),
  url: Joi.string()
});

exports.validateHotelParam = Joi.object({
  hotelId: Joi.number().required(),
})