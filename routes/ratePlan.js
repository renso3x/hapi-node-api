
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
}, {
  method: 'GET',
  path: '/rate-plans/{ratePlanId}/room-types',
  options: {
    validate: {
      params: ratePlanHelper.validateParams,
    }
  },
  handler: async (request) => {
    const { ratePlanId } = request.params;

    const roomTypes = await RatePlanController.getAllRoomTypes(ratePlanId);

    return roomTypes;
  }
}, {
  method: 'POST',
  path: '/rate-plans/{ratePlanId}/room-types',
  options: {
    validate: {
      params: ratePlanHelper.validateParams,
      payload: ratePlanHelper.validateRoomTypePayload
    }
  },
  handler: async (request) => {
    const { ratePlanId } = request.params;
    const { payload } = request;

    const ratePlan = await RatePlanController.findOne(ratePlanId);

    if (!ratePlan) return requestHelper.customError('Cannot find rate plan.');

    const roomTypes = await RatePlanController.createRoomType({ ...payload, ratePlanId });

    return roomTypes;
  }
}, {
  method: 'GET',
  path: '/rate-plans/{ratePlanId}/room-types/{roomTypeId}',
  options: {
    validate: {
      params: ratePlanHelper.validateRoomTypeParams,
    }
  },
  handler: async (request) => {
    const { ratePlanId, roomTypeId } = request.params;

    const ratePlan = await RatePlanController.findOne(ratePlanId);

    if (!ratePlan) return requestHelper.customError('Cannot find rate plan.');

    const roomType = await RatePlanController.findRoomTypeById(roomTypeId);

    if (!roomType) return requestHelper.customError('Cannot find room type on this rate plan.');

    return roomType;
  }
}, {
  method: 'PUT',
  path: '/rate-plans/{ratePlanId}/room-types/{roomTypeId}',
  options: {
    validate: {
      params: ratePlanHelper.validateRoomTypeParams,
      payload: ratePlanHelper.validateRoomTypePayload
    }
  },
  handler: async (request) => {
    const { ratePlanId, roomTypeId } = request.params;
    const { payload } = request;

    const ratePlan = await RatePlanController.findOne(ratePlanId);

    if (!ratePlan) return requestHelper.customError('Cannot find rate plan.');

    const { error, roomType } = await RatePlanController.updateRoomType(payload, roomTypeId);

    if (error) return requestHelper.customError('Room Type doesn\'t exists.');

    return roomType;
  }
}, {
  method: 'DELETE',
  path: '/rate-plans/{ratePlanId}/room-types/{roomTypeId}',
  options: {
    validate: {
      params: ratePlanHelper.validateRoomTypeParams,
    }
  },
  handler: async (request) => {
    const { ratePlanId, roomTypeId } = request.params;

    const ratePlan = await RatePlanController.findOne(ratePlanId);

    if (!ratePlan) return requestHelper.customError('Rate plan doesn\'t exists.');

    const { error, roomType } = await RatePlanController.deleteRoomType(roomTypeId);

    if (error) return requestHelper.customError('Room Type doesn\'t exists.');

    return roomType;
  }
}];