const express = require("express");
const chatriseRouter = require("./src/routes");
const { errorMiddleware } = require("./utils");

function createServer() {
    const app = express();
    app.use(express.json());
    app.use("/api", chatriseRouter);
    app.use(errorMiddleware)
    return app;
}

module.exports = { createServer };