// var router = require('express').Router();
// var passport = require('passport');
var router = require('express').Router();
const passport = require('passport');

const Player = require('../models/player');


// 
router.get('/', function(req, res) {
  Player.findById(req.body.id, function(err, player){
    console.log('Looking for the player', player)
    res.render('players',{
      title: "Spellbook",
      name: req.user
        
      
    })
})
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
    successRedirect: '/',
    failureRedirect: '/',
  }
));

// Logging out
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});



module.exports = router;