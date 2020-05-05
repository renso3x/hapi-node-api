const models = require('../models');
const RoomFeatures = models.RoomFeatures;

class FeatureController {
  async getAll() {
    return await RoomFeatures.findAll()
  }

  async create(data) {
    return await RoomFeatures.create(data);
  }

  async findOne(id) {
    return await RoomFeatures.findOne({ where: { id }});
  }

  async update(data, id) {
    const feature = await this.findOne(id);

    let response = { error: true };

    if (feature) {
      response.error = false;
      response.feature = await feature.update(data);

      return response;
    }

    return response
  }

  async delete(id) {
    const feature = await this.findOne(id);

    let response = { error: true };

    if (feature) {
      response.error = false;
      response.feature = await feature.destroy();

      return response;
    }

    return response
  }
}

module.exports = new FeatureController();