require("dotenv").config();

module.exports = {
    SERVER: {
        localPort: process.env.PORT
    },
    DATABASE: {
        mongoDBUrl: process.env.MONGODB_URL
    },
    ACCESS: {
        hashSaltRounds: process.env.HASH_SALT_ROUNDS
    }
};