var express = require('express');
var router = express.Router();
const playerCtrl = require('../controllers/players');


// router.get('/players', playerCtrl.index)
// router.post('index', playerCtrl.createchar)
router.get('players', playerCtrl.addCharacter) 
router.get('players', playerCtrl.show) 


// router.post('/players', isLoggedIn, playerCtrl.addcharacter)



// This function checks authentication and status of 'Player'
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}




module.exports = router;

