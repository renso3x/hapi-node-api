### Model Associations

- [x] User hasOne HotelChainsUser
- [x] HotelChainsUser belongsTo User

- [x] HotelChains hasMany HotelChainsUser
- [x] HotelChainsUser belongsTo HotelChains

- [x] Hotels hasMany HotelRooms
- [x] HotelRooms belongsTo Hotels

- [x] HotelRoomTypeRate.hasMany(PeriodRatePeriod)
- [x] PeriodRatePeriod.belongsTo(HotelRoomTypeRate)

- [x] PeriodRatePeriod.hasMany(RoomRate)
- [x] RoomRate.belongsTo(PeriodRatePeriod)

- [x] HotelRoomTypeRate.hasMany(HotelRooms)
- [x] HotelRooms.belongsTo(HotelRoomTypeRate)

- [x] m.HotelRooms.hasMany(m.HotelRoomTypeRate);

- [x] m.Booking.hasOne(m.Guest);

- [x] m.Hotels.hasMany(m.Booking);

- [x] m.Booking.hasOne(m.BookingDetails);


Checkout

- Booking Details
  - bookingId = 1
  - status = ['newbooking', 'checkout', 'canceled']
  - updatedDate = 2020-04-12


Hotel Room
  id = 1
  room_name = "A105"
  room_count = 2

Period Room Rate
  id = 1
  hotel_id = 1
  rate = 500

  id = 2
  hotel_id = 1
  rate = 1000

Period Rate Period - Contains Season Rates
  id = 1
  period_name = "Love Month"
  period_room_rate_id = 2

  id = 2
  period_name = "Standard"
  period_room_rate_id = 1


Hotel Room Type Rate
  - this will be displayed in the calendar

  id = 1
  hotel_room_id = 1
  period_rate_period = 1
  period_from = Mar 16, 2019
  period_to = April 12, 2019

  id = 2
  hotel_room_id = 1
  period_rate_period = 2
  period_from = April 12,2020
  period_to = April 15, 2020

Booking
  - room_type_rate_id = 1
  - hotel_id = 1
  - date_booking_from
  - data_booking_to
  - guest_id = 1

    room_type_rate_id = 2
  - hotel_id = 1
  - date_booking_from
  - data_booking_to
  - guest_id = 2

Guests
  id - 1
  name - Romeo Enso

  id - 2
  name - Joy Enso