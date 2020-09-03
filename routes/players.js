var express = require('express');
var router = express.Router();
const playerCtrl = require('../controllers/players.js');


router.get('/players', playerCtrl.indexChar)
router.post('/characters/newChar', playerCtrl.createChar)
// router.get('/newChar',isLoggedIn, playerCtrl.addCharacter) 
router.get('/characters/newChar', playerCtrl.show) 


// router.post('/characters/newChar', isLoggedIn, playerCtrl.addCharacter)



// This function checks authentication and status of 'Player'
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}




module.exports = router;

