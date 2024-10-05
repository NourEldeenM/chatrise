const { sendError } = require('../responses');

function errorMiddleware(err, req, res, next) {
    sendError(req, res, err.message, err.statusCode, err.errors);
}

module.exports = { errorMiddleware };