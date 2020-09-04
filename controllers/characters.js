const Character = require('../models/character');
const Player = require('../models/player');




module.exports = {
   index,
   show,
   createChar,
   delete: deleteChar,
   edit
}


// {'Character.player._id': req.params.id}
function index(req, res) {
    
    Character.find({'player': {$in: req.user._id}}, function(err, characters) {
        res.render('characters/index', {characters, title: 'my characters'})
    });
    
}
function edit(req, res){
    console.log('motherfucking edit')


}
// function delete(req, res) {
//     Character.findByIdAndDelete(req.params.id, function(err){
//         res.redirect('/characters')
//     })
// }

function show(req, res){
    console.log('show is firing')
    Character.findById(req.body.id, function(err, player){
        res.render('characters/newChar', 
        {name: 'jo jo', title: 'New Character' })
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


        // function deleteSet(req, res) {
        //     Set.findByIdAndDelete(req.params.id, function(err, set) {
        //       if(!set.createdBy.equals(req.user._id)) return res.redirect(`/sets/${set._id}`);
        //       res.redirect('/');
        //     });
        //   }
        function deleteChar(req, res) {
            console.log('delete fucker!')
            Character.findByIdAndDelete(req.params.id, function (err) {
                res.redirect('/characters');
            });
        };
