function sendSuccess(
    req,
    res,
    data = {},
    message = 'operation completed',
    status = 200,
) {
    res.status(status).json({ message, data }).end();
}

function sendError(
    req,
    res,
    data = {},
    message = 'operation failed',
    status = 400,
) {
    res.status(status).json({ message, errors: data }).end();
}

module.exports = { sendSuccess, sendError };
