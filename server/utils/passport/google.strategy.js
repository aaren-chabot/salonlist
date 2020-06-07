GoogleStrategy = require('passport-google').Strategy;

const config = {
  returnURL: 'http://localhost:3000/auth/google/return',
  realm: 'http://localhost:3000/'
};

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(config, function (identifier, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's Google profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Google account with a user record in your database,
        // and return that user instead.
        profile.identifier = identifier;
        return done(null, profile);
      });
    })
  );
};
