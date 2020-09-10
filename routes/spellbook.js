var router = require('express').Router();
const passport = require('passport');
const spellbooksCtrl = require('../controllers/spellbooks');




router.get('/characters/:id/show', spellbooksCtrl.show)
router.post('/characters/:id/show', spellbooksCtrl.addBook)
router.post('/character/show', spellbooksCtrl.index)



module.exports = router;