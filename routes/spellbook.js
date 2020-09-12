var router = require('express').Router();
const passport = require('passport');
const spellbooksCtrl = require('../controllers/spellbooks');




router.get('/characters/:id/show', spellbooksCtrl.show)
router.post('/spellbook/:id/create', spellbooksCtrl.addBook)
router.post('/character/show', spellbooksCtrl.index)



module.exports = router;