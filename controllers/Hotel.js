const models = require('../models');

const { Hotels, HotelUsers, User } = models;

module.exports = (() => {
  return {
    getAll,
    createHotel,
    findHotelById,
    createHotelUser,
    getAllHotelUsers,
    findAssocitation
  };

  async function getAll() {
    return await Hotels.findAll();
  }

  async function createHotel(payload) {
    return await Hotels.create(payload)
  }

  async function findHotelById(hotelId, model) {
    const hotel = await Hotels.findOne({
      where: { id: hotelId },
      include: model
    });

    if (!hotel) return { error: true };

    return { error: false, hotel };;
  }

  async function findAssocitation(hotelId, models) {
    return await Hotels.findOne({
      where: { id: hotelId },
      include: models
    });
  }

  async function getAllHotelUsers(hotelId) {
    return await Hotels.findAll({
      where: {
        id: hotelId
      },
      include: [
        {
          model: HotelUsers,
          include: [User]
        },
      ]
    })
  }

  async function createHotelUser(payload) {
    let response = { error: true };

    const hotel = await findHotelById(payload.hotelId);

    if (!hotel) return response;

    const hotelUser = await HotelUsers.create(payload);

    return Object.assign({}, response, {
      error: false,
      hotelUser
    });
  }
})()