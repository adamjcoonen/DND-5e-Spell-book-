var router = require('express').Router();
const passport = require('passport');


const spellbooksCtrl = require('../controllers/spellbooks');




router.get('/characters/:id/show', spellbooksCtrl.show)
router.post('/spellbooks/:id', spellbooksCtrl.addBook)
router.delete('/spellbooks/:id', spellbooksCtrl.delete)
// router.post('/character/:id/show', spellbooksCtrl.index)
// router.get('/characters/:id/show', spellbooksCtrl.listSpells)



module.exports = router;