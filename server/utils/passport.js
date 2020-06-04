const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JWTStrategy = require('passport-jwt').Strategy;
const keys = require('../config/keys');

// Load User Model
const User = require('../models/user.model');

// Strategy Options
const JwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.SECRET
};

const localOptions = {
  usernameField: 'email',
  passwordField: 'password'
};

// JWT Strategy
module.exports = (passport) => {
  passport.use(
    new JWTStrategy(JwtOptions, async (jwtPayload, done) => {
      const user = await User.findById(jwtPayload.id);
      if (user) return done(null, user);
      return done(null, false);
    })
  );

  // Local Strategy
  passport.use(
    new LocalStrategy(localOptions, async (email, password, done) => {
      // Check for user with email
      const user = await User.findOne({ email });
      if (!user) return done(null, false, { message: 'Incorrect email' });

      // Match password
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
