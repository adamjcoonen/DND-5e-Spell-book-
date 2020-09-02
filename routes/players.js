var express = require('express');
var router = express.Router();
const playerCtrl = require('../controllers/players');


router.get('/players', playerCtrl.index)

// router.post('/players', isLoggedIn, playerCtrl.addcharacter)



// This function checks authentication and status of 'Player'
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}




module.exports = router;

