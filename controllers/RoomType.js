const _ = require('lodash');
const models = require('../models');
const { RoomType, RatePlan } = models;
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
    const hotel = await HotelController.findAssocitation(hotelId, [
      {
        model: RoomType,
        include: [RatePlan]
      }
    ]);

    if (!hotel) return { error: true };

    return { error: false, roomTypes: hotel.roomtypes };
  }

  async function create(payload) {
    return await RoomType.create(payload);
  }

  async function findRoomType({ roomTypeId, hotelId }, findAssociation = []) {
    const { error, hotel } = await HotelController.findHotelById(hotelId, [
      {
        model: RoomType,
        where: {
          id: roomTypeId
        },
        include: findAssociation
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