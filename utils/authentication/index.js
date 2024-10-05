const jwt = require('jsonwebtoken');
const { AppError } = require('../error');

const authenticate = (req, res, next) => {
    const authHeader =
        req.headers['authorization'] || req.headers['Authorization'];
    if (!authHeader) throw AppError.unauthorized('unauthorized');
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        throw AppError.unauthorized('invalid token');
    }
};

module.exports = { authenticate };
