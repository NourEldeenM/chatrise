const express = require("express");
const chatriseRouter = require("./src/routes");

function createServer() {
    const app = express();
    app.use(express.json());
    app.use("/api", chatriseRouter);
    return app;
}

module.exports = { createServer };