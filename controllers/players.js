const Player = require('../models/player');


module.exports = {
    index,
    addSpellbook
}

function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Player.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Player.find(modelQuery)
    .sort(sortKey).exec(function(err, players) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('/index', { players, name: req.query.name, sortKey });
    });
  }
  
function addSpellbook(req, res , next){
    req.user.spellBooks.push(req.body);
    req.user.save(function(err){
        res.redirect('/');
    })

}