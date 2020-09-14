
var router = require('express').Router();
const passport = require('passport');
const characterCtrl = require('../controllers/characters.js');


router.get('/characters', isLoggedIn, characterCtrl.index);
router.get('/characters/newChar',isLoggedIn, characterCtrl.show)
router.post('/characters',isLoggedIn, characterCtrl.createChar)
router.delete('/characters/:id', isLoggedIn,characterCtrl.delete)
router.get('/characters/:id/edit', isLoggedIn,characterCtrl.edit)
router.put('/characters/:id',isLoggedIn, characterCtrl.update)




function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google')
}


module.exports = router;