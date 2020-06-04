const errorMessages = require('./error-messages');

const errorHandlerMiddleware = (err, res, next) => {
  if (err) {
    switch (err.message) {
      case '401':
        res.status(401).send(errorMessages._401);
      case '404':
        res.status(404).send(errorMessages._404);
      case '503':
        res.status(503).send(errorMessages._503);
      default:
        next(err);
    }
  } else {
    next();
  }
};

module.exports = errorHandlerMiddleware;
