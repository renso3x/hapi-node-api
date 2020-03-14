const { login } = require('../helpers/authHelper');

exports.authenticateRoute = [{
  method: 'POST',
  path: '/authenticate',
  handler: (request) => {
    const { email, password } = request.payload;
    return login(email, password);
  },
  config: { auth: false },
}]