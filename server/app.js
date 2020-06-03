const express = require('express');
const http = require('http');

// Server Utilities
const { onError, onListening, normalizePort } = require('./utils/server');

// Configs
const { PORT } = require('./utils/constants');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Method',
    'GET, POST, PATCH, DELETE, PUT, OPTIONS'
  );
  next();
});

// Routes
app.use('/healthcheck', require('./routes/healthCheck/healthCheck'));
app.use('/blogs', require('./routes/blogs/blogs'));
app.use('/businesses', require('./routes/businesses/businesses'));
app.use('/businessUsers', require('./routes/businessUsers/businessUsers'));
app.use('/users', require('./routes/users/users'));

// Catch Errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    const errors = [{ message: 'unauthorized' }];

    res.status(401).json({ errors });
  }
});

app.set('port', normalizePort(PORT));

const server = http.createServer(app);
// server.on('error', (err) => onError(err, PORT));
// server.on('listening', onListening(server, PORT));
server.listen(PORT);
