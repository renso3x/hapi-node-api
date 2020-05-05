const models = require('../models');
const RoomFeatures = models.RoomFeatures;

class FeatureController {
  static async getAll() {
    console.log('im called')
    return await RoomFeatures.findAll()
  }

  static async create(data) {
    return await RoomFeatures.create(data);
  }

  static async findOne(id) {
    return await RoomFeatures.findOne({ where: { id }});
  }

  static async update(data, id) {
    const feature = await this.findOne(id);

    let response = { error: true };

    if (feature) {
      response.error = false;
      response.feature = await feature.update(data);

      return response;
    }

    return response
  }

  static async delete(id) {
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

module.exports = FeatureController;