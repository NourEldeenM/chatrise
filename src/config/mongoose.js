const mongoose = require("mongoose");
const { DATABASE } = require("../config");

mongoose.connect(DATABASE.mongoDBUrl).then(() => {
    console.log("MongoDB connected successfully");
});

module.exports = mongoose;