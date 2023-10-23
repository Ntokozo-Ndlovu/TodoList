const notFoundMiddleware = require('./not-found');
const authenticateMiddleware =require('./auth');
const errorHandlingMiddleware = require('./error-handling');

module.exports = {notFoundMiddleware, authenticateMiddleware,errorHandlingMiddleware};