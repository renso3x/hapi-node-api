const models = require('../../models');
const roomHelper = require('../helpers/rooms');
const requestHelper = require('../helpers/request');

const RoomFeatures = models.RoomFeatures;

exports.roomFeatureRoutes = [
  {
    method: 'GET',
    path: '/room-features',
    handler: async () => {
      return await RoomFeatures.findAll()
    }
  }, {
    method: 'POST',
    path: '/room-features',
    options: {
      validate: {
        payload: roomHelper.validateRoomFeatures
      }
    },
    handler: async (request) => {
      return await RoomFeatures.create(request.payload);
    }
  }, {
    method: 'PUT',
    path: '/room-features/{featureId}',
    options: {
      validate: {
        params: roomHelper.validateParams,
        payload: roomHelper.validateRoomFeatures
      }
    },
    handler: async (request) => {
      const feature = await RoomFeatures.findOne({ where: { id: request.params.featureId }});
      if (!feature) return requestHelper.customError('Feature does\'nt exists.');

      return feature.update(request.payload);
    }
  }, {
    method: 'DELETE',
    path: '/room-features/{featureId}',
    options: {
      validate: {
        params: roomHelper.validateParams,
      }
    },
    handler: async (request) => {
      const feature = await RoomFeatures.findOne({ where: { id: request.params.featureId }});
      if (!feature) return requestHelper.customError('Feature does\'nt exists.');

      return feature.destroy();
    }
  }
]