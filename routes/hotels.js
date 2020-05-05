const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const models = require('../models');
const hotelHelper = require('../helpers/hotels');
const requestHelper = require('../helpers/request');

const Hotels = models.Hotels;
const HotelRooms = models.HotelRooms;
const RoomRate = models.RoomRate;
const PeriodRoomRate = models.PeriodRoomRate;
const HotelRoomTypeRate = models.HotelRoomTypeRate;
const Guest = models.Guest;
const Booking = models.Booking;
const BookingDetails = models.BookingDetails;

exports.hotelRoutes = [{
    method: 'GET',
    path: '/hotels',
    handler: async () => {
      return await Hotels.findAll();
    }
  }, {
    method: 'POST',
    path: '/hotels',
    options: {
      validate: {
        payload: hotelHelper.validateHotelPayload
      }
    },
    handler: async (request) => {
      return await Hotels.create(request.payload);
    }
  }, {
    method: 'PUT',
    path: '/hotels/{hotelId}',
    handler: async (request) => {
      const hotel = await Hotels.findOne({ where: { id: request.params.hotelId }});
      if (!hotel) return requestHelper.customError('Hotel does\'nt exists.');

      hotel.update(request.payload);

      return hotel.save();
    }
  }, {
    method: 'GET',
    path: '/hotels/rooms', // ?hotel=1
    handler: async (request) => {
      return await Hotels.findOne({
        where: {
          id: request.query.hotel
        },
        include: [
          { model: HotelRooms }
        ],
      });
    }
  }, {
    method: 'POST',
    path: '/hotels/rooms',
    options: {
      validate: {
        query: hotelHelper.validateHotelQuery,
        payload: hotelHelper.validateHotelRooms
      }
    },
    handler: async (request) => {
      const isHotelExist = await Hotels.findOne({ where: { id: request.query.hotel }});

      if (!isHotelExist) return requestHelper.customError('Hotel doesn\'t exists.')

      return await HotelRooms.create({
        roomNumber: request.payload.roomNumber,
        roomFloor: request.payload.roomFloor,
        roomCount: request.payload.roomCount,
        hotelId: request.query.hotel
      });
    }
  }, {
    method: 'PUT',
    path: '/hotels/rooms',
    options: {
      validate: {
        query: hotelHelper.validatePutHotelRoomQuery,
        payload: hotelHelper.validateHotelRooms
      }
    },
    handler: async (request) => {
      const isHotelExist = await Hotels.findOne({ where: { id: request.query.hotel }});

      if (!isHotelExist) return requestHelper.customError('Hotel doesn\'t exists.')

      const hotelRoom = await HotelRooms.findOne({ where: { id: request.query.room }});

      if (!hotelRoom) return requestHelper.customError('Hotel Room doesn\'t exists.');

      hotelRoom.update({
        roomNumber: request.payload.roomNumber,
        roomFloor: request.payload.roomFloor,
        roomCount: request.payload.roomCount,
      })

      return hotelRoom.save();
    }
  }, {
    method: 'GET',
    path: '/hotels/room-rates',
    options: {
      validate: {
        query: hotelHelper.validateHotelQuery,
      }
    },
    handler: async (request) => {
      const hotel = await hotelHelper.ifHotelExist(request);
      if (!hotel) return requestHelper.customError('Hotel doesn\'t exists.');

      return await Hotels.findAll({
        where: { id: request.query.hotel },
        include: [
          { model: RoomRate }
        ]
      });
    }
  }, {
    method: 'POST',
    path: '/hotels/room-rates',
    options: {
      validate: hotelHelper.validatePostRoomRate
    },
    handler: async (request) => {
      const hotel = await hotelHelper.ifHotelExist(request);
      if (!hotel) return requestHelper.customError('Hotel doesn\'t exists.');

      const newRates = {
        ...request.payload,
        hotelId: request.query.hotel
      }
      return await RoomRate.create(newRates);
    }
  }, {
    method: 'PUT',
    path: '/hotels/room-rates/{roomRateId}',
    options: {
      validate: hotelHelper.validatePutRoomRate
    },
    handler: async (request) => {
      const hotel = await hotelHelper.ifHotelExist(request);
      if (!hotel) return requestHelper.customError('Hotel doesn\'t exists.');

      const roomRate = await RoomRate.findOne({ where: { id: request.params.roomRateId }});

      if (!roomRate) return requestHelper.customError('Room Rate doesn\'t exists.');

      roomRate.update({
        ...request.payload,
        hotelId: request.query.hotel
      });

      return roomRate.save();
    }
  }, {
    method: 'GET',
    path: '/hotels/room-rate-periods',
    options: {
      validate: {
        query: hotelHelper.validateHotelQuery,
      }
    },
    handler: async (request) => {
      const hotel = await hotelHelper.ifHotelExist(request);
      if (!hotel) return requestHelper.customError('Hotel doesn\'t exists.');

      return await Hotels.findAll({
        where: { id: request.query.hotel },
        include: [
          {
            model: PeriodRoomRate,
          }
        ]
      });
    }
  }, {
    method: 'POST',
    path: '/hotels/room-rate-periods',
    options: {
      validate: hotelHelper.validateRoomRatePeriods
    },
    handler: async (request) => {
      const hotel = await hotelHelper.ifHotelExist(request);
      if (!hotel) return requestHelper.customError('Hotel doesn\'t exists.');

      const roomRatePeriods = {
        ...request.payload,
        hotelId: request.query.hotel
      }
      return await PeriodRoomRate.create(roomRatePeriods);
    }
  }, {
    method: 'PUT',
    path: '/hotels/room-rate-periods/{roomRatePeriodId}',
    options: {
      validate: hotelHelper.validatePutRoomRatePeriods
    },
    handler: async (request) => {
      const hotel = await hotelHelper.ifHotelExist(request);
      if (!hotel) return requestHelper.customError('Hotel doesn\'t exists.');

      const roomRatePeriod = await PeriodRoomRate.findOne({ where: { id: request.params.roomRatePeriodId }})

      roomRatePeriod.update({
        ...request.payload,
      });

      return roomRatePeriod.save();
    }
  }, {
    method: 'GET',
    path: '/hotels/room-types',
    options: {
      validate: {
        query: hotelHelper.validateHotelQuery,
      }
    },
    handler: async (request) => {
      const hotel = await hotelHelper.ifHotelExist(request);
      if (!hotel) return requestHelper.customError('Hotel doesn\'t exists.');

      return await Hotels.findAll({
        where: { id: request.query.hotel },
        include: [
          {
            model: HotelRooms,
            include: [
              {
                model: HotelRoomTypeRate,
              }
            ]
          }
        ]
      });
    }
  }, {
    method: 'POST',
    path: '/hotels/room-types',
    options: {
      validate: hotelHelper.validateRoomRateTypes
    },
    handler: async (request) => {
      const hotelRoom = await hotelHelper.checkHotelRoom(request);
      if (!hotelRoom) return requestHelper.customError('Room doesn\'t exist');

      const periodRatePeriod = await hotelHelper.checkRatePeriod(request);
      if (!periodRatePeriod) return requestHelper.customError('Period Rate doesn\'t exist');

      return await HotelRoomTypeRate.create(request.payload);
    }
  }, {
    method: 'PUT',
    path: '/hotels/room-types/{roomTypeId}',
    options: {
      validate: hotelHelper.validatePutRoomRateTypes
    },
    handler: async (request) => {
      const hotelRoom = await hotelHelper.checkHotelRoom(request);
      if (!hotelRoom) return requestHelper.customError('Room doesn\'t exist');

      const periodRatePeriod = await hotelHelper.checkRatePeriod(request);
      if (!periodRatePeriod) return requestHelper.customError('Period Rate doesn\'t exist');

      const hotelRoomRateType = await HotelRoomTypeRate.findOne({ where: { id: request.params.roomTypeId }});

      hotelRoomRateType.update(request.payload)

      return hotelRoomRateType.save();
    }
  }, {
    method: 'GET',
    path: '/hotels/bookings',
    options: {
      validate: {
        query: hotelHelper.validateHotelQuery,
      }
    },
    handler: async (request) => {
      const hotel = await hotelHelper.ifHotelExist(request);
      if (!hotel) return requestHelper.customError('Hotel doesn\'t exists.');

      const bookingFrom = request.query.startDate || new Date();
      const bookingTo = request.query.endDate || new Date();

      return await Hotels.findOne({
        where: {
          id: request.query.hotel,
        },
        include: [
          {
            model: Booking,
            where: {
              [Op.or]: [{
                bookingFrom: {
                  [Op.between]: [bookingFrom, bookingTo]
                },
              }, {
                bookingTo: {
                  [Op.between]: [bookingFrom, bookingTo]
                },
              }]
            },
            include: [
              { model: BookingDetails },
              { model: Guest },
              {
                model: HotelRoomTypeRate,
                include: [
                  { model: HotelRooms },
                  { model: PeriodRoomRate }
                ]
              }
            ]
          }
        ]
      });
    }
  }, {
    method: 'POST',
    path: '/hotels/bookings',
    options: {
      validate: hotelHelper.validateBookingPayload
    },
    handler: async (request) => {
      const { guest, hotelId, roomTypeRateId, bookingFrom, bookingTo } = request.payload;
      const newGuest = await Guest.create(guest);

      const newBooking = {
        guestId: newGuest.id,
        hotelId,
        roomTypeRateId,
        bookingFrom,
        bookingTo
      };

      const booking = await Booking.create(newBooking);

      return await BookingDetails.create({
        bookingId: booking.id,
        status: 'newbooking',
      });
    }
  }, {
    method: 'PUT',
    path: '/hotels/bookings/{bookingId}',
    options: {
      validate: hotelHelper.validatePutBookingPayload
    },
    handler: async (request) => {

      let booking = await hotelHelper.findBookingById(request);

      if (!booking) return requestHelper.customError('Cannot find booking');

      const { guest, roomTypeRateId, bookingFrom, bookingTo, status } = request.payload;

      const getBooking = await Booking.findOne({
        where: { id: request.params.bookingId },
      });

      const updateBookingDetails = {
        roomTypeRateId,
        bookingFrom,
        bookingTo
      };
      getBooking.update(updateBookingDetails);
      getBooking.save();

      const bookingDetails = await BookingDetails.findOne({
        where: { bookingId: booking.id },
      });

      bookingDetails.update({ status });
      return bookingDetails.save();
    }
  }
]