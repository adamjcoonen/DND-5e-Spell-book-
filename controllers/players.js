const Player = require('../models/player');


module.exports = {
    indexChar,
    // addCharacter,
    // createChar,
    show
}

function indexChar(req, res) {
    Player.find(function(err, ) {
      res.render("playlists/index", { title: "All playlists", playlists });
    });
  }
// render the new character page
// function addCharacter( req, res){
//     res.render('characters/newChar', { title: "New Character"})
// }

// function createChar(req, res , next){
//     const newCharacter = new Character(req.body);
//     newCharacter.user = req.user_id;
//     newCharacter.save(function(err){
//         if (err) return render('characters/new', {title: "New Character" })
//         console.log(newCharacter,'!!!!!!')

//         res.redirect('/');
//     })
// }

function show(req, res){
    Player.findById(req.body.id, function(err, player){
        res.render('players', {name: req.user })
    })
}


