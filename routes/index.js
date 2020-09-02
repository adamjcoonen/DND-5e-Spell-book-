// var router = require('express').Router();
// var passport = require('passport');
const express = require('express');
const router = express.Router();
const passport = require('passport');

// The root route renders our only view
router.get('/', function(req, res) {
res.render('index',{
  title: "Spellbook"
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