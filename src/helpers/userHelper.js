const _ = require('lodash');

exports.userAttributes = (user) => _.omit(user, ['password'])