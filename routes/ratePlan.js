
const ratePlanHelper = require('../helpers/ratePlan');
const requestHelper = require('../helpers/request');

const RatePlanController = require('../controllers/RatePlan');

exports.ratePlanRoutes = [{
  method: 'GET',
  path: '/rate-plans',
  handler: RatePlanController.getAll
}, {
  method: 'POST',
  path: '/rate-plans',
  options: {
    validate: {
      payload: ratePlanHelper.validatePayload
    }
  },
  handler: async ({ payload }) => {
    try {
      const ratePlan = await RatePlanController.create(payload);
      return ratePlan;
    } catch (e) {
      requestHelper.customError(e.messsage)
    }
  }
}, {
  method: 'GET',
  path: '/rate-plans/{ratePlanId}',
  options: {
    validate: {
      params: ratePlanHelper.validateParams
    }
  },
  handler: async ({ params }) => {
    const ratePlan = await RatePlanController.findOne(params.ratePlanId);

    if (!ratePlan) return requestHelper.customError('Cannot find rate plan.');

    return ratePlan;
  }
}, {
  method: 'PUT',
  path: '/rate-plans/{ratePlanId}',
  options: {
    validate: {
      params: ratePlanHelper.validateParams,
      payload: ratePlanHelper.validatePayload
    }
  },
  handler: async (request) => {
    const { ratePlanId } = request.params;
    const { payload } = request;

    const { error, ratePlan } = await RatePlanController.update(payload, ratePlanId);

    if (error) return requestHelper.customError('Rate plan doesn\'t exists.');

    return ratePlan;
  }
}, {
  method: 'DELETE',
  path: '/rate-plans/{ratePlanId}',
  options: {
    validate: {
      params: ratePlanHelper.validateParams,
    }
  },
  handler: async (request) => {
    const { ratePlanId } = request.params;

    const { error, ratePlan } = await RatePlanController.delete(ratePlanId);

    if (error) return requestHelper.customError('Rate plan doesn\'t exists.');

    return ratePlan;
  }
}];