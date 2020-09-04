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


// {'Character.player._id': req.params.id}
function index(req, res) {
    
    Character.find({'player': {$in: req.user._id}}, function(err, characters) {
        res.render('characters/index', {characters, title: 'my characters'})
    });
    
}
function edit(req, res){
    console.log('motherfucking edit')
    Character.findById(req.params.id, function (err, char) {
        if (err) {
            res.redirect('/characters')
        }
        res.render('characters/edit', { char})
    })
}

function update(req, res){
    Character.findByIdAndUpdate(req.params.id, function (err,char){
        if (err) {
                res.render('/characters/edit', {char, title: "Edit Character", })
        }
        res.redirect('/character')
    })
}

function show(req, res){
    console.log('show is firing')
    Character.findById(req.body.id, function(err, player){
        res.render('characters/newChar', 
        {name: req.user.name, title: 'New Character' })
    })
}

function createChar(req, res){
    console.log('create function fires')
    let newChar = new Character(req.body)
    newChar.player = req.user._id;
        newChar.save(function(err){
            if (err){
                return res.render('/characters/new', {title: 'New Character',  })
            }
            console.log('this is the new character',newChar)
            res.redirect('/characters')
        })
        }


     
        function deleteChar(req, res) {
            console.log('delete fucker!')
            Character.findByIdAndDelete(req.params.id, function (err) {
                res.redirect('/characters');
            });
        };
