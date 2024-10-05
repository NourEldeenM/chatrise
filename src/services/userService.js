const { userModel } = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { ACCESS } = require("../config");

async function createUser(details) {
    details.userId = uuidv4();
    const hashedPass = await bcrypt.hash(details.password, +ACCESS.hashSaltRounds);
    details.password = hashedPass;
    const newUser = new userModel(details);
    const result = await newUser.save();
    return result;
}

module.exports = { createUser };