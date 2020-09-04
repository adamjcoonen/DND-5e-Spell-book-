const Character = require('../models/character');
const Player = require('../models/player');




module.exports = {
   index,
   show
}

function index(req, res){
    console.log('index is firing')
//     if (Player.schema.obj ){
//     Character.find({}, function(err,char) {
//     console.log(char)
//     })
// }
}

// {'Character.player._id': req.params.id}

function show(req, res){
    console.log('show is firing')
    Character.findById(req.body.id, function(err, player){
        res.render('characters/newChar', 
        {name: 'jo jo', title: 'New Character' })
    })
}