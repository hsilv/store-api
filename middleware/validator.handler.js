const boom = require('@hapi/boom');

function validateHandler(schema, property) {
  return (req, res, next) => {
    const { error } = schema.validate(req[property]);
    if (error) {
      next(boom.badRequest(error));
    } else next();
  };
}

module.exports = { validateHandler };
