const { userModel } = require('../models/userModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const { ACCESS } = require('../config');
const jwt = require('jsonwebtoken');
const { AppError } = require('../../utils');

function generateToken(user) {
    const token = jwt.sign(
        {
            id: user.userId,
            username: user.username,
            email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
    );
    return token;
}

async function createHashedPass(password) {
    return await bcrypt.hash(password, +ACCESS.hashSaltRounds);
}

async function createUser(details) {
    details.userId = uuidv4();
    details.password = await createHashedPass(details.password);
    const existingUser = await userModel.findOne({
        $or: [{ email: details.email }, { username: details.username }],
    });
    if (existingUser)
        throw AppError.conflict('Username or Email already in use');
    const newUser = new userModel(details);
    await newUser.save();
    return generateToken(newUser);
}

async function validateUser(details) {
    const record = await userModel.findOne({ email: details.email });
    if (!record) throw AppError.notFound('Email not found');
    const correctPassword = await bcrypt.compare(
        details.password,
        record.password,
    );
    if (!correctPassword)
        throw AppError.badRequest('Password or Email incorrect');
    return generateToken(record);
}

async function getUserByUsername(username) {
    const record = await userModel.findOne({ username });
    if (!record) throw AppError.notFound('User not found');
    return record;
}
module.exports = { createUser, validateUser, getUserByUsername };
