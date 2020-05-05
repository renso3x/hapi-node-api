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
  validateBed: Joi.object({
    name: Joi.string().required(),
  }),

  validateBedParams: Joi.object({
    bedId: Joi.number().required()
  })
}