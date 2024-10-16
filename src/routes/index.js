const express = require('express');
const router = express.Router();

// all route files
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

router.use('/users', userRouter);
router.use('/posts', postRouter);

module.exports = router;
