const models = require('../models');
const { Amenities, RoomFeatures } = models;

const FeatureController = (function() {
  let api = {
    getAll,
    create,
    findOne,
    update,
    delete: deleteById
  };

  return api;

  async function getAll() {
    return await RoomFeatures.findAll()
  }

  async function create(data) {
    return await RoomFeatures.create(data);
  }

  async function findOne(id) {
    return await RoomFeatures.findOne({ where: { id }});
  }

  async function update(data, id) {
    const feature = await this.findOne(id);

    let response = { error: true };

    if (feature) {
      response.error = false;
      response.feature = await feature.update(data);

      return response;
    }

    return response
  }

  async function deleteById(id) {
    const feature = await this.findOne(id);

    let response = { error: true };

    if (feature) {
      response.error = false;
      response.feature = await feature.destroy();

      return response;
    }

    return response
  }
})();

module.exports = FeatureController;