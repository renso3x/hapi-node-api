const models = require('../models');
const BedConfig = models.BedConfig;

class BedConfigController {
  async getAll() {
    return await BedConfig.findAll()
  }

  async create(data) {
    return await BedConfig.create(data);
  }

  async findOne(id) {
    return await BedConfig.findOne({ where: { id }});
  }

  async update(data, id) {
    const bed = await this.findOne(id);

    let response = { error: true };

    if (bed) {
      response.error = false;
      response.bed = await bed.update(data);

      return response;
    }

    return response
  }

  async delete(id) {
    const bed = await this.findOne(id);

    let response = { error: true };

    if (bed) {
      response.error = false;
      response.bed = await bed.destroy();

      return response;
    }

    return response
  }
}

module.exports = new BedConfigController();