const models = require('../../models');
const { bedValidator } = require('../helpers/rooms');
const requestHelper = require('../helpers/request');

const BedConfiguration = models.BedConfig;

exports.bedConfigRoutes = [
  {
    method: 'GET',
    path: '/beds',
    handler: async () => {
      return await BedConfiguration.findAll()
    }
  }, {
    method: 'POST',
    path: '/beds',
    options: {
      validate: {
        payload: bedValidator.validateRoomFeatures
      }
    },
    handler: async (request) => {
      return await BedConfiguration.create(request.payload);
    }
  }, {
    method: 'PUT',
    path: '/beds/{bedId}',
    options: {
      validate: {
        params: bedValidator.validateFeatureParams,
        payload: bedValidator.validateRoomFeatures
      }
    },
    handler: async (request) => {
      const feature = await BedConfiguration.findOne({ where: { id: request.params.bedId }});
      if (!feature) return requestHelper.customError('Bed does\'nt exists.');

      return feature.update(request.payload);
    }
  }, {
    method: 'DELETE',
    path: '/beds/{bedId}',
    options: {
      validate: {
        params: bedValidator.validateParams,
      }
    },
    handler: async (request) => {
      const feature = await BedConfiguration.findOne({ where: { id: request.params.bedId }});
      if (!feature) return requestHelper.customError('Bed does\'nt exists.');

      return feature.destroy();
    }
  }
]