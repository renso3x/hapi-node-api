const models = require('../models');

const { RatePlan } = models;

class RatePlanController {

  async getAll() {
    return await RatePlan.findAll();
  }

  async create(payload) {
    return await RatePlan.create(payload);
  }

  async findOne(id) {
    return await RatePlan.findOne({ where: { id } });
  }

  async update(data, id) {
    const ratePlan = await this.findOne(id);

    let response = { error: true };

    if (ratePlan) {
      response.error = false;
      response.ratePlan = await ratePlan.update(data);

      return response;
    }

    return response
  }

  async delete(id) {
    const ratePlan = await this.findOne(id);

    let response = { error: true };

    if (ratePlan) {
      response.error = false;
      response.ratePlan = await ratePlan.destroy();

      return response;
    }

    return response
  }
}

module.exports = new RatePlanController();