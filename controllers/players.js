const Player = require('../models/player');


module.exports = {
    index,
    // addcharacter
}

function index(req, res, next) {
    console.log(req.query)
    const playerQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {}
    Player.find(modelQuery).exec(function(err, player){
      if (err) return next(err);
      // console.log(res.player)
      })
    }



// function addcharacter(req, res , next){
//     req.user.characer.push(req.body);
//     req.user.save(function(err){
//         res.redirect('/');
//     })

// }