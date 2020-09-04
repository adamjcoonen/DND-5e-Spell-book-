const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Player = require('../models/player');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK
}, function (accessToken, refreshToken, profile, cb) {  // Verify CB
  // A user has logged in via Google OAuth
  Player.findOne({ googleId: profile.id }, function (err, user) {
    if (err) return cb(err);
    if (user) {
      return cb(null, user);
    } else {
      // We have a new user!
      const newPlayer = new Player({
        name: profile.displayName,
        email: profile.emails[0].value,
        googleId: profile.id,
        avatar: profile.photos[0].value
      });
      newPlayer.save(function (err) {
        if (err) return cb(err);
        return cb(null, newPlayer);
      });
    }
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Player.findById(id, function(err, user) {
    return done(err, user);
  });
});