const localStrategy = require('./local.strategy');
const jwtStrategy = require('./jwt.strategy');

const { serialization } = require('./utils');

module.exports = (passport) => {
  localStrategy(passport);
  jwtStrategy(passport);

  serialization(passport);
};
