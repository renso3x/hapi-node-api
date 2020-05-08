const models = require('../models');
const { RatePlan } = models;

const RoomTypeController = require('./RoomType');

module.exports = (() => {
  return {
    getAllRates,
    createRate,
    findRatePlan,
    updateRate,
    deleteRatePlan
  };

  async function getAllRates({ params }) {
    const response = await RoomTypeController.findRoomType(params, [{
      model: RatePlan
    }]);

    if (response.error && !response.roomType) return { error: true };

    return { error: false, ratePlans: response.roomType.rateplans }
  }

  async function createRate(params, payload) {
    const { error } = await RoomTypeController.findRoomType(params, [{
      model: RatePlan
    }]);

    if (error) return { error: true };

    const newRate = await RatePlan.create(payload);

    return { error: false, newRate };
  }

  async function findRatePlan(params) {
    const response = await RoomTypeController.findRoomType(params);

    let ratePlan = await RatePlan.findOne({
      where: {
        id: params.ratePlanId
      }
    });

    if (response.error || !ratePlan) return { error: true };

    return { error: false, ratePlan };
  }

  async function updateRate(params, payload) {
    const { error, ratePlan } = await findRatePlan(params);

    if (error) return { error: true };

    const updatedRate = await ratePlan.update(payload);

    return { error: false, ratePlan: updatedRate };
  }

  async function deleteRatePlan(params) {
    const { error, ratePlan } = await findRatePlan(params);

    if (error) return { error: true };

    const deletedRate = await ratePlan.destroy();

    return { error: false, ratePlan: deletedRate };
  }
})();