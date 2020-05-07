const models = require('../models');

const { Hotels, HotelUsers, User } = models;

module.exports = (() => {
  return {
    getAll,
    createHotel,
    findHotelById,
    createHotelUser,
    getAllHotelUsers
  };

  async function getAll() {
    return await Hotels.findAll();
  }

  async function createHotel(payload) {
    return await Hotels.create(payload)
  }

  async function findHotelById(hotelId) {
    return await Hotels.findOne({ where: { id: hotelId }});
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