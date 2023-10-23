const BadRequestError = require('./bad-request');
const NotFoundError = require('./not-found');
const NotAuthorizedError = require('./not-authorized');
const CustomAPIError = require('./custom-error');


module.exports = {BadRequestError,NotAuthorizedError,NotFoundError,CustomAPIError};