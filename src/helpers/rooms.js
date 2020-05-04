const Joi = require('@hapi/joi');

exports.validateRoomFeatures = Joi.object({
  name: Joi.string().required(),
})

exports.validateParams = Joi.object({
  featureId: Joi.number().required()
})