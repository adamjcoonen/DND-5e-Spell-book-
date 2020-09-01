var router = require('express').Router();
var passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res) {
  res.redirect('/index');
});

// User wants to log in
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/player',
    failureRedirect: '/player',
  }
));

// Logging out
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/player');
});

module.exports = router;