const TwitterStrategy = require('passport-twitter').Strategy;

const User = require('../../models/user.model');

const config = {
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: 'http://www.example.com/auth/twitter/callback'
};

module.exports = (passport) => {
  passport.use(
    new LocalStrategy(config, async (token, tokenSecret, profile, done) => {
      console.log('twt, token', token);
      console.log('twt, secret', tokenSecret);
      console.log('twt, profile', profile);

      return done(null, false, { message: 'Incorrect password' });
    })
  );
};
