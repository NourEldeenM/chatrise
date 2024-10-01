const express = require("express");
const router = express.Router();

// all route files
const userRouter = require("./userRouter");

router.use("/users", userRouter);

module.exports = router;