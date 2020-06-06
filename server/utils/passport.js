const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { SECRET } = require('./config');

// Load User Model
const User = require('../models/user.model');

// Strategy Options
const strategy = {
  jwt: {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET
  },
  local: {
    usernameField: 'email',
    passwordField: 'password'
  }
};

// JWT Strategy
module.exports = (passport) => {
  passport.use(
    new JWTStrategy(strategy.jwt, async (jwtPayload, done) => {
      const user = await User.findById(jwtPayload.id);
      if (user) return done(null, user);

      return done(null, false);
    })
  );

  // Local Strategy
  passport.use(
    new LocalStrategy(strategy.local, async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) return done(null, false, { message: 'Incorrect email' });

      const isMatch = await user.comparePassword(password);
      if (isMatch)
        return done(null, user, { message: 'Logged in successfully' });

      return done(null, false, { message: 'Incorrect password' });
    })
  );

  // Passport Serialization
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
