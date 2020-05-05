====================================================================
Models:

[x]Rate Plan: Junior Suite (rate_plan)
  - code: string
  - inclusions: enum('breakfast', 'lunch', 'dinner', 'all inclusive')
  - min_adult: int
  - max_adult: int
  - min_child: int
  - max_child: int
  - default_rate: float

[x] Room Type: Junior Suite w/ breakfast (room_type)
  - name: string
  - rate_plan: int
  - description: text

[x] Room Features: (room_features)
  - room_type_id: int
  - feature_id: int (hotel_features_id)
  - default_rate: float -> this will be from the rate plan value if not supplied

[x] Features: (hotel_room_features)
  - name: string('air condition', 'swimming pool', 'hair dyer')

[x] Bed Configuration: (hotel_bed_config)
  - name: string ['single bed', 'single sofa bed', 'king bed']

[x] Rate Plan Bed Config: (rate_plan_bed_config)
  - rate_plan: int (rate_plan.id)
  - bed_config: int (hotel_bed_config.id)

[x] Rate Extras: (rate_extras)
  - name: string ['w/bed', 'w/bed + bfast', 'bed sharing']
  - rate: float

[x] Custom Rate Plan: (custom_rate_plan) -> consist of updated price per day
  - rate_plan_id: int
  - rate: float
  - applied_on: date -> applicable on the date of purchase

====================================================================
Relationships:

m.RatePlan.hasMany(m.RoomType);
m.RoomType.belongsTo(m.RatePlan, {
  foreignKey: 'rate_plan',
  as: 'rateplan'
});

m.RatePlan.hasOne(m.BedConfig);

m.RatePlanBedConfig.belongsTo(m.BedConfig);

m.RoomType.hasMany(m.RoomFeatures);
m.RatePlan.hasMany(m.RateExtra);

m.RatePlan.hasMany(m.CustomRatePlan)

====================================================================
TODO:

- Booking Invoice -> booking details, total price
- Guest Details