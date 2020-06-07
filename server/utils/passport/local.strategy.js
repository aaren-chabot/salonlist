const LocalStrategy = require('passport-local').Strategy;

const User = require('../../models/user.model');

const config = {
  usernameField: 'email',
  passwordField: 'password'
};

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(config, async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) return done(null, false, { message: 'Incorrect email' });

      const isMatch = await user.comparePassword(password);
      if (isMatch)
        return done(null, user, { message: 'Logged in successfully' });

      return done(null, false, { message: 'Incorrect password' });
    })
  );
};
