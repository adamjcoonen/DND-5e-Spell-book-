var router = require('express').Router();
const passport = require('passport');
const characterCtrl = require('../controllers/characters')

router.get('/', characterCtrl.index);
router.get('/characters/newChar', characterCtrl.show) 

module.exports = router;