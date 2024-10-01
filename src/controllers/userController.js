const userService = require("../services/userService");

async function createUser(req, res, next) {
    try {
        const details = req.body;
        const data = await userService.createUser(details);
        res.status(201).json({ data: data }).end();
    } catch (err) {
        res.status(400).json({ message: err.message }).end();
    }
}

module.exports = { createUser };