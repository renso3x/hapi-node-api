const Joi = require('@hapi/joi');

exports.validatePayload = Joi.object().keys({
  code: Joi.string(),
  inclusions: Joi.valid('breakfast', 'lunch', 'dinner', 'all incusive').required(),
  min_adult: Joi.number(),
  max_adult: Joi.number(),
  min_child: Joi.number(),
  max_child: Joi.number(),
  default_rate: Joi.number().integer(),
});

exports.validateParams = Joi.object().keys({
  ratePlanId: Joi.number().required()
})

exports.validateRoomTypePayload = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string()
})

exports.validateRoomTypeParams = Joi.object().keys({
  ratePlanId: Joi.number().required(),
  roomTypeId: Joi.number().required()
})