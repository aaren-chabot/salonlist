const debug = require('debug')('node-angular');

const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
};

const onError = (error, PORT) => {
  if (error.syscall != 'listen') throw error;
  const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + PORT;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = (server, PORT) => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + PORT;
  debug('Listening on ' + bind);
};

module.exports = {
  normalizePort,
  onError,
  onListening
};
