const models = require('../models');

const { Guest } = models;

const HotelController = require('./Hotel');

module.exports = (() => {
  const api = {
    getAll,
    find,
    create,
    update,
    deleteById
  }

  return api;

  async function getAll(hotelId) {
    return await HotelController.findAssocitation(hotelId, {
      model: Guest
    });
  }

  async function find(email) {
    return await Guest.findOne({
      where: { email }
    });
  }

  async function create({ params, payload }) {
    const response = await HotelController.findHotelById(params.hotelId);

    if (response.error) return { error: true }

    let guest = await find(payload.email);

    if (guest) return { error: false, guest };

    const guestPayload = {
      ...payload,
      hotelId: params.hotelId
    }

    guest = await Guest.create(guestPayload);

    return { error: false, guest };

  }

  async function update({ params, payload }) {
    const response = await HotelController.findHotelById(params.hotelId);
    let guest = await find(payload.email);

    if (response.error || !guest) return { error: true }

    guest = await guest.update(payload)

    return { error: false, guest };
  }

  async function deleteById(params) {

  }
})()