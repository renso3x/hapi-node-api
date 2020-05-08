const models = require('../models');
const { RoomType } = models;
const HotelController = require('./Hotel');

module.exports = (() => {
  return {
    getRoomTypes,
    create,
    findRoomType,
    updateRoomType,
    deleteRoomType
  }

  async function getRoomTypes(hotelId) {
    const roomTypes = await HotelController.findAssocitation(hotelId, [
      { model: RoomType }
    ]);

    if (!roomTypes) return { error: true };

    return { error: false, roomTypes };
  }

  async function create(payload) {
    return await RoomType.create(payload);
  }

  async function findRoomType({ roomTypeId, hotelId }) {
    const { error, hotel } = await HotelController.findHotelById(hotelId, [
      {
        model: RoomType,
        where: {
          id: roomTypeId
        }
      }
    ]);

    if (error) return { error: true };

    return { error: false, roomType: hotel.roomtypes[0] };
  }

  async function updateRoomType({ params, payload }) {
    let roomType = await RoomType.findOne({ where: { id: params.roomTypeId }});

    if (!roomType) return { error: true };

    roomType = await roomType.update(payload);

    return { error: false, roomType };
  }

  async function deleteRoomType({ params }) {
    let roomType = await RoomType.findOne({ where: { id: params.roomTypeId }});

    if (!roomType) return { error: true };

    roomType = await roomType.destroy();

    return { error: false, roomType };
  }
})();