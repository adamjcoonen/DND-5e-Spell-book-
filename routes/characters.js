
var router = require('express').Router();
const passport = require('passport');
const characterCtrl = require('../controllers/characters.js');


router.get('/characters', characterCtrl.index);
router.get('/characters/newChar', characterCtrl.show)
router.post('/characters', characterCtrl.createChar)
router.delete('/characters/:id', characterCtrl.delete)
router.get('/characters/:id/edit', characterCtrl.edit)
router.put('/characters/:id', characterCtrl.update)


module.exports = router;