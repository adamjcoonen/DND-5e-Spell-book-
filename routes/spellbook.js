
var router = require('express').Router();
const passport = require('passport');

const spellbookCtrl = require('../controllers/spellbook');



router.get('/bookDetails/:id/spellbookView', spellbookCtrl.showBook )
router.post('/bookDetails/:id/spellbookView', spellbookCtrl.addSpell )
// router.post()



module.exports = router;