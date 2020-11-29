const Character = require('../models/character');
const Player = require('../models/player');




module.exports = {
   index,
   show,
   createChar,
   delete: deleteChar,
   edit,
   update
}



function index(req, res) {
    Character.find({'player': {$in: req.user._id}}, function(err, characters) {
        res.render('characters/index', {characters, title: `${req.user.name}'s characters`})
    });
    
}
function edit(req, res){
    Character.findById(req.params.id, function (err, char) {
        if (err) {
            res.redirect('/characters')
        }
        res.render('characters/edit', { char})
    })
}

function update(req, res){
    Character.findByIdAndUpdate(req.params.id, req.body, function (err,char){
        if (err) {
                res.render('characters/edit', {char, title: "Edit Character", })
        }
        res.redirect('/characters')
    })
}

function show(req, res){
    Character.findById(req.body.id, function(err, player){
        res.render('characters/newChar', 
        {name: req.user.name, title: 'New Character' })
    })
}

function createChar(req, res){
    let newChar = new Character(req.body)
    newChar.player = req.user._id;
        newChar.save(function(err){
            if (err){
                return res.redirect('/characters/new', {title: 'New Character',  })
            }
            res.redirect('/characters')
        })
        }


     
        function deleteChar(req, res) {
            Character.findByIdAndDelete(req.params.id, function (err) {
                res.redirect('/characters');
            });
        };
