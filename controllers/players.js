const Player = require('../models/player');
const Character = require('../models/character');


module.exports = {
    indexChar,
    // addCharacter,
    createChar,
    show
}

function indexChar(req, res) {
    Character.find(function(err, char) {
      res.render("players/index", { title: "", name });
    });
  }
// render the new character page
// function addCharacter( req, res){
//     res.render('characters/newChar', { title: "New Character"})
// }


function createChar(req, res, next) {
    let newChar = new Character()
    newChar.save(function(err){
        console.log(newChar)
    Player.findById(req.user._id, function(err, player){
        player.character.push(newChar._id)
        player.save(function(err){
            console.log("character",newChar)
            console.log("player",player)
            res.render('/players', { name: "pony"});
    })
  })
    })
}

function show(req, res){
    console.log('show is firing')
    Character.findById(req.body.id, function(err, player){
        res.render('characters/newChar', {name: req.params.user, title: 'New Character' })
    })
}


