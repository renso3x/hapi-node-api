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

- [ ] Hotels hasOne StarRating
- [ ] StarRating belongsTo Hotels

- [ ] RoomBookings hasOne Bookings
- [ ] Bookings belongsTo RoomBookings

- [ ] Bookings hasOne Guests
- [ ] Guests belongsTo Bookings


Hotel Room
  id = 1
  room_name = "A105"

Period Room Rate
  id = 1
  rate = 500

  id = 2
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

