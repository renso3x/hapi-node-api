const Boom = require('@hapi/boom');

exports.notFound = () => Boom.notFound();

exports.notAuthorized = () => Boom.unauthorized();

exports.customError = (errMessage) => Boom.badRequest(errMessage)