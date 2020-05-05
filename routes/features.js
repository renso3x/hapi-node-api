const { roomFeatureValidator } = require('../helpers/rooms');
const requestHelper = require('../helpers/request');

const FeatureController = require('../controllers/Features');

exports.roomFeatureRoutes = [
  {
    method: 'GET',
    path: '/room-features',
    handler: FeatureController.getAll
  }, {
    method: 'POST',
    path: '/room-features',
    options: {
      validate: {
        payload: roomFeatureValidator.validateRoomFeatures
      }
    },
    handler: async (request) => {
      const { payload } = request;

      const feature = await FeatureController.create(payload);

      return feature;
    }
  }, {
    method: 'GET',
    path: '/room-features/{featureId}',
    options: {
      validate: {
        params: roomFeatureValidator.validateFeatureParams,
      }
    },
    handler: async (request) => {
      const { featureId } = request.params;

      const feature = await FeatureController.findOne(featureId);

      if (!feature) return requestHelper.customError('Feature does\'nt exists.');

      return feature;
    }
  }, {
    method: 'PUT',
    path: '/room-features/{featureId}',
    options: {
      validate: {
        params: roomFeatureValidator.validateFeatureParams,
        payload: roomFeatureValidator.validateRoomFeatures
      }
    },
    handler: async (request) => {
      const { featureId } = request.params;
      const { payload } = request;

      const { error, feature } = await FeatureController.update(payload, featureId);

      if (error) return requestHelper.customError('Feature doesn\'t exists.');

      return feature;
    }
  }, {
    method: 'DELETE',
    path: '/room-features/{featureId}',
    options: {
      validate: {
        params: roomFeatureValidator.validateParams,
      }
    },
    handler: async (request) => {
      const { featureId } = request.params;

      const { error, feature } = await FeatureController.delete(featureId);

      if (error) return requestHelper.customError('Feature doesn\'t exists.');

      return feature;
    }
  }
]