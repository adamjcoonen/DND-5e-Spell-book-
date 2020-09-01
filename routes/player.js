var express = require('express');
var router = express.Router();
let playerCtrl = require('../controllers/players');


router.get('/players', playerCtrl.index)

// the 
router.post('/', isLoggedIn, playerCtrl.addSpellbook)



// This function checks authentication and status of 'Player'
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}




module.exports = router;

