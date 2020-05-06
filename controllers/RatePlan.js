const models = require('../models');
const { RatePlan, RoomType } = models;

const RoomTypeController = require('./roomType');

const RatePlanController = (function(args) {
  let api = {
    getAll,
    create,
    findOne,
    update,
    delete: deleteById,
    getAllRoomTypes
  };

  if (args.length > 0) {
    // Map the dependency to the public method
    args.map(di => {
      api = Object.assign({}, api, di);
    })

    return api;
  } else {
    return api;
  }

  async function getAllRoomTypes(id) {
    return await RatePlan.findAll({
      where: {
        id,
      },
      include: RoomType
    });
  }

  async function getAll() {
    return await RatePlan.findAll();
  }

  async function create(payload) {
    return await RatePlan.create(payload);
  }

  async function findOne(id) {
    return await RatePlan.findOne({ where: { id } });
  }

  async function update(data, id) {
    const ratePlan = await this.findOne(id);

    let response = { error: true };

    if (ratePlan) {
      response.error = false;
      response.ratePlan = await ratePlan.update(data);

      return response;
    }

    return response
  }

  async function deleteById(id) {
    const ratePlan = await this.findOne(id);

    let response = { error: true };

    if (ratePlan) {
      response.error = false;
      response.ratePlan = await ratePlan.destroy();

      return response;
    }

    return response
  }
});

module.exports = RatePlanController([RoomTypeController]);