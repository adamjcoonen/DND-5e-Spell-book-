const Player = require('../models/player');
const Character = require('../models/character');
const Spellbooks = require('../models/spellbooks')


module.exports = {
    show,
    index,
    // createSpell,
    addBook
}

// function index(req, res) {
    
    // Character.find({'player': {$in: req.user._id}}, function(err, characters) {
    //     res.render('characters/spellbook', {characters, title: 'my characters'})
    // });
    

    function show(req, res){
        Character.findById(req.params.id, function (err, char) {
            if (err) {
                res.redirect('/characters')
            }
            res.render('characters/show', { char})
        })
    }

   function addBook(req,res){
       console.log('add book')
       let nBook =  { 
        class: req.body.name,
        level: req.body.level,
        restrictedSchools: req.body.restricted
    } 
    const newBook = new Spellbooks(nBook)
       newBook.save(function(err) {
           if(err) {
               return res.render('characters/show',{
                   characterId: req.params.id,
                   title: 'Add spellbook',
                   name
            })
         } else {
                res.redirect(`characters/${req.params.id}/show`)
            }
       })
    }


    function index(req, res) {
        console.log('index has fired BOOOYAAA')
    
        Spellbooks.find({'characters': {$in: req.characterId}}, function(err, book) {
            res.render('characters/:id/show', {book})
        });
    }