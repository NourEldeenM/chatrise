const { AppError } = require('../error');

function authorizeProfileEdit(req, res, next) {
    const profileUserName = req.params.username;
    if (profileUserName != req.user.username) {
        throw AppError.unauthorized("You cannot edit someone's profile");
    }
    next();
}

module.exports = { authorizeProfileEdit };
