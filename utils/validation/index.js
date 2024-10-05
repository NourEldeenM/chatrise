const { AppError } = require('../');
const validate =
    (schema, context = 'body') =>
    (req, res, next) => {
        if (!['body', 'params', 'query', 'headers'].includes(context))
            throw new Error('Invalid context!');
        const { error } = schema.validate(req[context], { abortEarly: false });
        if (error) {
            throw AppError.badRequest('Validation failed!', error.details);
        }
        next();
    };

module.exports = { validate };
