#Route Definitions

- Authenticate
  - POST /authenticate - authenticate user return HotelChains, Hotel

- User
  - GET /users/ - get all users
  - POST /users/ - create user associated in a HotelChain
  - UPDATE /users/{userId} - update user
  - DELETE /users/{userId} - soft delete a user/suspend

- HotelChain
  - GET /hotel-chains - get all hotel chains
  - POST /hotel-chains - create a hotel chain

- Hotels
  - GET /hotels - get all list of hotels
  - POST /hotels - create a hotels, associate with HotelChain
  - PUT /hotels/{hotelId} - update hotel details/ suspend
  - DELETE /hotels/{hotelId} - soft delete a hotel

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

  - HotelRoom
    - GET /hotels/rooms/ - get all rooms of a hotel
    - POST /hotels/rooms/ - create a room in a hotel, associate with RoomTypes
    - PUT /hotels/rooms/{roomId} - update a room/ suspend
    - DELETE /hotels/rooms/{roomId} - soft delete a room

  - Guests
    - GET /hotels/guests - get all guests in a hotel

  - Bookings
    - GET /hotels/bookings - get all bookings in a hotel
    - POST /hotels/bookings - create a booking in a hotel, associate with Guests
    - PUT  /hotels/bookings/{bookingId} - update a booking in a hotel
    - DELETE /hotels/booking/{bookingId} - cancel a booking
