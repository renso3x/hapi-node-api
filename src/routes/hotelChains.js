const models = require('../../models');
const hotelChainHelper = require('../helpers/hotelChain');
const userHelper = require('../helpers/userHelper');
const requestHelper = require('../helpers/request');

const HotelChains = models.HotelChains;
const HotelChainUser = models.HotelChainUser;
const User = models.User;

exports.hotelChainRoutes = [
  {
    method: 'POST',
    path: '/hotel-chains',
    options: {
      validate: {
        payload: hotelChainHelper.validateHotelChainPayload
      }
    },
    handler: async (request) => {
      return await HotelChains.create(request.payload);
    }
  }, {
    method: 'GET',
    path: '/hotel-chains',
    handler: async () => {
      return await HotelChains.findAll()
    }
  }, {
    method: 'POST',
    path: '/hotel-chains/user',
    options: {
      validate: {
        payload: hotelChainHelper.validateHotelChainUser
      }
    },
    handler: async (request) => {
      const isUserExist = await userHelper.findById(request.payload.userId);

      if (!isUserExist) return requestHelper.customError('User not found');

      const isHotelChainExist = await hotelChainHelper.findHotelChainById(request.payload.hotelChainId);

      if (!isHotelChainExist) return requestHelper.customError('Hotel Chain not found')

      return await HotelChainUser.create(request.payload)
    }
  }
]