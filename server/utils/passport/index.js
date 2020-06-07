const localStrategy = require('./local.strategy');
const jwtStrategy = require('./jwt.strategy');
const twitterStrategy = require('./twitter.strategy');

const { serialization } = require('./utils');

module.exports = (passport) => {
  localStrategy(passport);
  jwtStrategy(passport);
  twitterStrategy(passport);

  serialization(passport);
};
