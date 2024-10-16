const express = require('express');
const userController = require('../controllers/userController');
const { authenticate, authorizeProfileEdit } = require('../../utils');
const router = express.Router();

router.route('/signup').post(userController.createUser);
router.route('/login').post(userController.validateUser);

router
    .route('/profiles/:username')
    .get(userController.getUserByUsername)
    .patch(
        authenticate,
        authorizeProfileEdit,
        userController.updateUserProfile,
    );

module.exports = router;
