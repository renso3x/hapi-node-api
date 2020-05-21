const Boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models');
const userHelper = require('./userHelper');

const User = models.User;
const HotelUsers = models.HotelUsers;
const Hotels = models.Hotels;

const JWT_KEY = process.env.JWT_KEY;

exports.login = async (email, password) => {
  const isExist = await userHelper.findUserDetailsByEmail(email);

  if (!isExist) return Boom.notFound();

  const user = await User.findOne({
    where: {
      email
    },
    raw: true,
  });

  const hotelUsers = await HotelUsers.findAll({
    where: { id: user.id },
    include: [
      Hotels
    ]
  });

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) return Boom.badRequest('Invalid login credentials.');

  const credentials = { email };

  const token = makeJWTSignToken(credentials);

  return { token, hotel: hotelUsers.map(h => h.hotel) };
}

const makeJWTSignToken = (credentials) => jwt.sign(credentials, JWT_KEY, { algorithm: 'HS256', expiresIn: '7d' });