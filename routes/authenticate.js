const { login } = require('../helpers/authHelper');
const { findUserDetailsByEmail } = require('../helpers/userHelper');
const { notAuthorized } = require('../helpers/request');

exports.authenticateRoute = [{
  method: 'POST',
  path: '/authenticate',
  handler: (request) => {
    const { email, password } = request.payload;
    return login(email, password);
  },
  config: { auth: false },
}, {
  method: 'GET',
  path: '/me',
  handler: async (request) => {
    const user = await findUserDetailsByEmail(request.auth.credentials.email);
    if (user.length === 0) {
      return notAuthorized();
    }

    return { token: request.auth.token };
  },
}]