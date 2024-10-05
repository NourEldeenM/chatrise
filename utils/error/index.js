const { AppError } = require('./appError');
const { errorMiddleware } = require('./errorMiddleware');

module.exports = { AppError, errorMiddleware };
