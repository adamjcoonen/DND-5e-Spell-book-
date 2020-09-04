// var router = require('express').Router();
// var passport = require('passport');
var router = require('express').Router();
const passport = require('passport');





// 
router.get('/', function(req, res,) {
  res.render('players', { title: 'Dnd-5e-Spellbook', name: req.user });
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
    successRedirect: '/characters',
    failureRedirect: '/',
  }
));

// Logging out
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});



module.exports = router;