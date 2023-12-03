function logError(error, req, res, next) {
  if (
    !error.isBoom &&
    !(error instanceof SyntaxError && error.status === 400 && 'body' in error)
    ) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  next(error);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  res.status(500).json({ message: 'Ha ocurrido un error dentro del servidor' });
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  } else if (
    error instanceof SyntaxError &&
    error.status === 400 &&
    'body' in error
  ) {
    res.status(400).json({ message: 'malformed JSON' });
  } else {
    next(error);
  }
}

module.exports = { logError, errorHandler, boomErrorHandler };
