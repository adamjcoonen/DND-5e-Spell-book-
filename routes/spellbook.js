var router = require('express').Router();
const passport = require('passport');
const spellbooksCtrl = require('../controllers/spellbooks');

router.get('/characters/:id/show', spellbooksCtrl.show)
router.post('/characters/:id', spellbooksCtrl.addBook)



module.exports = router;