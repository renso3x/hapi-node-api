const Joi = require('@hapi/joi');

const models = require('../../models');
const HotelChains = models.HotelChains;

exports.validateHotelChainPayload = Joi.object({
  chainCode: Joi.string().required(),
  chainName: Joi.string().required(),
})

exports.validateHotelChainUser = Joi.object({
  userId: Joi.number().required(),
  hotelChainId: Joi.number().required()
})

exports.findHotelChainById = async(hotelChainId) => {
  const hotelChain = await HotelChains.findOne({ where: { id: hotelChainId }, raw: true });

  return hotelChain;
}