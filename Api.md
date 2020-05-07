### Route Definitions

- [x] Authenticate
  - [x] POST /authenticate - authenticate user return HotelChains, Hotel

- [x] User
  - [x] GET /users/ - get all users
  - [x] POST /users/ - create user associated in a HotelChain
  - [x] UPDATE /users/{userId} - update user/suspend

- Hotel

- Room Type

- Rate Plan

- Rate Amenities

- Bed Configuration

Relationships

Hotel has many RoomType

RoomTypes has many Rate Plans

RoomType has many Amenities

Rate Plans has one bed config
