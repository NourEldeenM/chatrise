const express = require('express');
const userController = require('../controllers/userController');
const { authenticate } = require('../../utils');
const router = express.Router();

router.route('/signup').post(userController.createUser);
router.route('/login').post(userController.validateUser);

module.exports = router;
