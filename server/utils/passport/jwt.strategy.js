require('dotenv').config();
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../../models/user.model');

const config = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

module.exports = (passport) => {
  passport.use(
    new JWTStrategy(config, async (jwtPayload, done) => {
      const user = await User.findById(jwtPayload.id);
      if (user) return done(null, user);

      return done(null, false);
    })
  );
};
