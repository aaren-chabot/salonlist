const {
  handleBodyRequestParsing,
  handleCookieRequestParsing
} = require('./common.middleware');

module.exports = [handleBodyRequestParsing, handleCookieRequestParsing];
