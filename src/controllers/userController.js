const { sendSuccess } = require('../../utils');
const userService = require('../services/userService');

async function createUser(req, res, next) {
    try {
        const details = req.body;
        const data = await userService.createUser(details);
        sendSuccess(req, res, { token: data }, 'user created', 201);
    } catch (err) {
        next();
    }
}

module.exports = { createUser };
