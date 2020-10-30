var express = require('express');
var router = express.Router();
const playerCtrl = require('../controllers/players');


// router.get('/characters', playerCtrl.show)
// router.get('/newChar',isLoggedIn, playerCtrl.addCharacter) 



// router.post('/characters/newChar', isLoggedIn, playerCtrl.addCharacter)



// This function checks authentication and status of 'Player'
// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }




module.exports = router;

