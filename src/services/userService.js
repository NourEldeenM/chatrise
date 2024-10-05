const { userModel } = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const { ACCESS } = require('../config');
const jwt = require('jsonwebtoken');

async function createUser(details) {
    details.userId = uuidv4();
    const hashedPass = await bcrypt.hash(
        details.password,
        +ACCESS.hashSaltRounds,
    );
    details.password = hashedPass;
    const newUser = new userModel(details);
    await newUser.save();
    const token = jwt.sign(
        {
            id: newUser.userId,
            username: newUser.username,
            email: newUser.email,
            // Add any other details you want in the token
        },
        process.env.JWT_SECRET, // The secret key
        { expiresIn: '1h' }, // Token expiration time
    );
    return token;
}

module.exports = { createUser };
