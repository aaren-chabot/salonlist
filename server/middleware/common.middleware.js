const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const handleBodyRequestParsing = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
};

const handleCookieRequestParsing = (app) => {
  app.use(cookieParser());
};

const handleSettingHeaders = (app) => {
  app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
      'Access-Control-Allow-Method',
      'GET, POST, DELETE' // PATCH, PUT, OPTIONS
    );
    next();
  });
};

module.exports = {
  handleBodyRequestParsing,
  handleCookieRequestParsing,
  handleSettingHeaders
};
