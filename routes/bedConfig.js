const { bedValidator } = require('../helpers/rooms');
const requestHelper = require('../helpers/request');

const BedConfigController = require('../controllers/BedConfig');

exports.bedConfigRoutes = [
  {
    method: 'GET',
    path: '/beds',
    handler: BedConfigController.getAll
  }, {
    method: 'POST',
    path: '/beds',
    options: {
      validate: {
        payload: bedValidator.validatePayload
      }
    },
    handler: async (request) => {
      const { payload } = request;

      const bed = await BedConfigController.create(payload);

      return bed;
    }
  }, {
    method: 'GET',
    path: '/beds/{bedId}',
    options: {
      validate: {
        params: bedValidator.validateParams,
      }
    },
    handler: async (request) => {
      const { bedId } = request.params;

      const bed = await BedConfigController.findOne(bedId);

      if (!bed) return requestHelper.customError('Bed Config does\'nt exists.');

      return bed;
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
      const { bedId } = request.params;
      const { payload } = request;

      const { error, bed } = await BedConfigController.update(payload, bedId);

      if (error) return requestHelper.customError('Bed Config does\'nt exists.');

      return bed;
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
      const { bedId } = request.params;

      const { error, bed } = await BedConfigController.delete(bedId);

      if (error) return requestHelper.customError('Bed Config exists.');

      return bed;
    }
  }
]