const Joi = require('@hapi/joi');

exports.roomFeatureValidator = {
  validateRoomFeatures: Joi.object({
    name: Joi.string().required(),
  }),

  validateFeatureParams: Joi.object({
    featureId: Joi.number().required()
  })
}

exports.bedValidator = {
  validatePayload: Joi.object({
    name: Joi.string().required(),
  }),

  validateParams: Joi.object({
    bedId: Joi.number().required()
  })
}