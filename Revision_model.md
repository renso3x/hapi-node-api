Hotel:
  - has many rate plans
    - Junior Suite
    - Deluxe
    - Superior

  - rate plans has many room type
    - Junior Suite
      - Junior Suite w/ breakfast
      - Junior Suite all inclusive


Hotel Setup:

Rate Plan: Junior Suite (rate_plan)
  - code: string
  - inclusions: enum('breakfast', 'lunch', 'dinner', 'all inclusive')
  - min_adult: int
  - max_adult: int
  - min_child: int
  - max_child: int
  - default_rate: float
  - bed_config: int (rate_plan_bed_config)

Room Type: Junior Suite w/ breakfast (room_type)
  - name: string
  - rate_plan: int
  - description: text

Room Features: (room_features)
  - room_type_id: int
  - feature_id: int (hotel_features_id)
  - default_rate: float -> this will be from the rate plan value if not supplied

Features: (hotel_room_features)
  - name: string('air condition', 'swimming pool', 'hair dyer')

Bed Configuration: (hotel_bed_config)
  - name: string ['single bed', 'single sofa bed', 'king bed']

Rate Plan Bed Config: (rate_plan_bed_config)
  - rate_plan: int (rate_plan.id)
  - bed_config: int (hotel_bed_config.id)

Rate Extras: (rate_extras)
  - name: string ['w/bed', 'w/bed + bfast', 'bed sharing']
  - rate: float


Relationships:

RatePlan => has many => RoomType

RoomType => belongsTo => RatePlan

RatePlan => has many => Rate Plan Bed Config

Rate Plan Bed Config => belongsTo => BedConfiguration

RoomType => has many => RoomFeatures

RatePlan => has many => Rate Extras (for max guest add-ons)



