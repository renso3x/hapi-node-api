### Model Associations

- [x] User hasOne HotelChainsUser
- [x] HotelChainsUser belongsTo User

- [x] HotelChains hasMany HotelChainsUser
- [x] HotelChainsUser belongsTo HotelChains

- [ ] Hotels hasOne StarRating
- [ ] StarRating belongsTo Hotels

- [ ] Hotels hasMany HotelRooms
- [ ] HotelRooms belongsTo Hotels

- [ ] Hotels hasMany RoomBookings
- [ ] RoomBookings belongsTo Hotels

- [ ] RoomBookings hasMany RoomTypes
- [ ] RoomTypes belongsTo RoomBookings

- [ ] RoomTypes hasMany PeriodRoomRates
- [ ] PeriodRoomRates belongsTo RoomTypes

- [ ] PeriodRoomRates hasMany RoomRatePeriods
- [ ] RoomRatePeriods belongsTo PeriodRoomRates

- [ ] RoomBookings hasOne Bookings
- [ ] Bookings belongsTo RoomBookings

- [ ] Bookings hasOne Guests
- [ ] Guests belongsTo Bookings
