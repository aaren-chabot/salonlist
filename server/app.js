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
const { URI: mongoURI, config: mongoConfig } = configs.mongo;
const { PORT } = configs.server;

const app = express();

// Common Middleware
applyMiddleware(commonMiddleware, app);

// Routes
app.use('/healthcheck', require('./routes/healthCheck/healthCheck'));
app.use('/blogs', require('./routes/blogs/blogs'));
app.use('/businesses', require('./routes/businesses/businesses'));
app.use('/businessUsers', require('./routes/businessUsers/businessUsers'));
app.use('/users', require('./routes/users/users'));

// Development Logger
app.use(developmentLogger);

// Error Middleware
app.use(errorHandlerMiddleware);

mongoose
  .connect(mongoURI, mongoConfig)
  .then(async () => {
    console.log(`Connected to database at ${mongoURI}`);
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
