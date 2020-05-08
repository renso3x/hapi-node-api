const {
  validateRatePlanParams,
  validateRoomTypeParams,
  validateRatePlanPayload,
  validateRatePlanStayPayload,
  validateRatePlanStayParams
} = require('../../helpers/hotels');
const { customError } = require('../../helpers/request');

const RatePlanControllers = require('../../controllers/RatePlan');

const prefix = `/hotels/{hotelId}/room-types/{roomTypeId}`;

module.exports = [{
  method: 'GET',
  path: `${prefix}/rate-plans`,
  options: {
    validate: {
      params: validateRoomTypeParams,
    }
  },
  handler: async(request) => {
    const { error, ratePlans } = await RatePlanControllers.getAllRates(request);

    if (error) return customError('Sorry no rate plans found')

    return ratePlans;
  }
}, {
  method: 'POST',
  path: `${prefix}/rate-plans`,
  options: {
    validate: {
      params: validateRoomTypeParams,
      payload: validateRatePlanPayload
    }
  },
  handler: async(request) => {
    const bodyPayload = {
      ...request.payload,
      roomTypeId: request.params.roomTypeId
    };
    const { error, newRate } = await RatePlanControllers.createRate(request.params, bodyPayload);

    if (error) return customError('Cannot find room type');

    return newRate;
  }
}, {
  method: 'GET',
  path: `${prefix}/rate-plans/{ratePlanId}`,
  options: {
    validate: {
      params: validateRatePlanParams,
    }
  },
  handler: async(request) => {
    const { error, ratePlan } = await RatePlanControllers.findRatePlan(request.params);

    if (error) return customError('Cannot find room type or rate plan');

    return ratePlan;
  }
}, {
  method: 'PUT',
  path: `${prefix}/rate-plans/{ratePlanId}`,
  options: {
    validate: {
      params: validateRatePlanParams,
      payload: validateRatePlanPayload
    }
  },
  handler: async(request) => {
    const bodyPayload = {
      ...request.payload,
      roomTypeId: request.params.roomTypeId
    };
    const { error, ratePlan } = await RatePlanControllers.updateRate(request.params, bodyPayload);

    if (error) return customError('Cannot find room type or rate plan');

    return ratePlan;
  }
}, {
  method: 'DELETE',
  path: `${prefix}/rate-plans/{ratePlanId}`,
  options: {
    validate: {
      params: validateRatePlanParams,
    }
  },
  handler: async(request) => {
    const { error, ratePlan } = await RatePlanControllers.deleteRatePlan(request.params);

    if (error) return customError('Cannot find room type or rate plan');

    return ratePlan;
  }
}, {
  method: 'GET',
  path: `${prefix}/rate-plans/{ratePlanId}/stay`,
  options: {
    validate: {
      params: validateRatePlanParams,
    }
  },
  handler: async (request) => {
    const { error, ratePlan } = await RatePlanControllers.getAllRatePlanStay(request.params);

    if (error) return customError('Cannot find room type or rate plan');

    return ratePlan;
  }
}, {
  method: 'POST',
  path: `${prefix}/rate-plans/{ratePlanId}/stay`,
  options: {
    validate: {
      params: validateRatePlanParams,
      payload: validateRatePlanStayPayload
    }
  },
  handler: async (request) => {
    const bodyPayload = {
      ...request.payload,
      ratePlanId: request.params.ratePlanId,
    }
    const { error, stay } = await RatePlanControllers.createRatePlanStay(request.params, bodyPayload);

    if (error) return customError('Cannot find room type or rate plan');

    return stay;
  }
}, {
  method: 'PUT',
  path: `${prefix}/rate-plans/{ratePlanId}/stay/{stayId}`,
  options: {
    validate: {
      params: validateRatePlanStayParams,
      payload: validateRatePlanStayPayload
    }
  },
  handler: async (request) => {
    const bodyPayload = {
      ...request.payload,
      ratePlanId: request.params.ratePlanId,
      stayId: request.params.stayId
    };

    const { error, stay } = await RatePlanControllers.updateRatePlanStay(request.params, bodyPayload);

    if (error) return customError('Cannot find room type or rate plan');

    return stay;
  }
}, {
  method: 'DELETE',
  path: `${prefix}/rate-plans/{ratePlanId}/stay/{stayId}`,
  options: {
    validate: {
      params: validateRatePlanStayParams,
    }
  },
  handler: async (request) => {
    const { error, stay } = await RatePlanControllers.deleteRatePlanStay(request.params);

    if (error) return customError('Cannot find room type or rate plan');

    return stay;
  }
}]