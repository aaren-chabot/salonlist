const express = require('express');
const mongoose = require('mongoose');

// Import Utilities
const applyMiddleware = require('./utils/apply-middleware');

// Import Custom Middleware
const commonMiddleware = require('./middleware');
const errorHandlerMiddleware = require('./middleware/error-handler/error-handler.middleware');
const developmentLogger = require('./middleware/development-logger.middleware');

// Configs
const configs = require('./utils/config');
const { URI: mongooseURI, config: mongooseConfig } = configs.mongoose;
const { PORT } = configs.server;

const app = express();

// Common Middleware
applyMiddleware(commonMiddleware, app);

// Routes
app.use('/api/healthcheck', require('./routes/healthCheck/healthCheck'));
app.use('/api/blogs', require('./routes/blogs/blogs'));
app.use('/api/businesses', require('./routes/businesses/businesses'));
app.use('/api/users', require('./routes/users/users'));

// Development Logger
app.use(developmentLogger);

// Error Middleware
app.use(errorHandlerMiddleware);

mongoose
  .connect(mongooseURI, mongooseConfig)
  .then(async () => {
    console.log(`Connected to database at ${mongoURI}`);
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
