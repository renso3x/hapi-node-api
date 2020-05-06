const models = require('../models');

const { RoomType } = models;

const RoomTypeController = (function() {
  return {
    createRoomType,
    findRoomTypeById,
    updateRoomType,
    deleteRoomType
  };

  async function createRoomType(payload) {
    return await RoomType.create(payload);
  }

  async function findRoomTypeById(id) {
    return await RoomType.findOne({ where: { id } });
  }

  async function updateRoomType(payload, id) {
    const roomType = await findRoomTypeById(id);

    let response = { error: true };

    if (roomType) {
      response.error = false;
      response.roomType = await roomType.update(payload);

      return response;
    }

    return response
  }

  async function deleteRoomType(id) {
    const roomType = await findRoomTypeById(id);

    let response = { error: true };

    if (roomType) {
      response.error = false;
      response.roomType = await roomType.destroy();

      return response;
    }

    return response
  }
})();

module.exports = RoomTypeController;