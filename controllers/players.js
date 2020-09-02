const Player = require('../models/player');
const Character = require('../models/player');
const { render } = require('../server');

module.exports = {
    // index,
    addcharacter
}

// function index(req, res, next) {
//         Character.find
//     }



function addcharacter(req, res , next){
    const newCharacter = new Character(req.body);
    newCharacter.user = req.user_id;
    newCharacter.save(function(err){
        if (err) return render('characters/new', {title: "New Character" })
        console.log(newCharacter,'!!!!!!')

        res.render('/');
    })
}
