### Route Definitions

- [x] Authenticate
  - [x] POST /authenticate - authenticate user return HotelChains, Hotel

- [x] User
  - [x] GET /users/ - get all users
  - [x] POST /users/ - create user associated in a HotelChain
  - [x] UPDATE /users/{userId} - update user/suspend

- [x] HotelChain
  - [x] GET /hotel-chains - get all hotel chains
  - [x] POST /hotel-chains - create a hotel chain

- [x] Hotels
  - [x] GET /hotels - get all list of hotels
  - [x] POST /hotels - create a hotels, associate with HotelChain
  - [x] PUT /hotels/{hotelId} - update hotel details/ suspend

  - [x] HotelRoom
    - [x] GET /hotels/rooms/ - get all rooms of a hotel
    - [x] POST /hotels/rooms/ - create a room in a hotel, associate with RoomTypes
    - [x] PUT /hotels/rooms/{roomId} - update a room/ suspend

  - RoomRate
    - GET /hotels/room-rate - get all room rates
    - POST /hotesls/room-rate - create a room rate

  - RoomRatePeriods
    - GET /hotels/room-rate/periods - get all room rate periods
    - POST /hotels/room-rate/periods - create a room rate periods
    - PUT /hotels/room-rate/periods/{periodId} - update room rate period / suspend
    - DESTROY /hotels/room-rate/periods/{periodId} - remove room rate period

  - RoomTypes
    - GET /hotels/room-types/ - get room types
    - POST /hotels/room-types/ - create room type, associate with RoomRatePeriods
    - PUT /hotels/room-types/{roomTypeId} - update room type / suspend
    - DELETE /hotels/room-types/{roomTypeId} - remove room type

  - Guests
    - GET /hotels/guests - get all guests in a hotel

  - Bookings
    - GET /hotels/bookings - get all bookings in a hotel
    - POST /hotels/bookings - create a booking in a hotel, associate with Guests
    - PUT  /hotels/bookings/{bookingId} - update a booking in a hotel
    - DELETE /hotels/booking/{bookingId} - cancel a booking
