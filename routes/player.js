var express = require('express');
var router = express.Router();
let playerCtrl = require('/controllers/players');


router.get('/player', playerCtrl.index)

// the player router
router.post('/facts', isLoggedIn, playerCtrl.addDetail)







module.exports = router;

