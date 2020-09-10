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
        
        Character.findById(req.params.id, function (err, charName) {
            if (err) {
                res.redirect('/characters')
            } else{
            res.render('characters/show', {charName: `${charName.name}`,
                                            charId: `${charName.id}` })
        }
        console.log("This is the Char Name!!!")
    })
}

   function addBook(req,res){
       let nBook =  { 
        class: req.body.class,
        maxLevel: req.body.maxLevel,
        restrictedSchools: req.body.restrictedSchools,
        objId: req.params.id
    } 
    const newBook = new Spellbooks(nBook)
       newBook.save(function(err) {
           if(err) {
            res.redirect(`/characters/${req.params.id}/show`)
            console.log(nBook, "nbook redirect")
            
               } else {
                console.log("it was a success!!!", newBook)
                Character.findByIdAndUpdate(req.params.id, 
                    { $push: {'spellbooks': {newBook:_id}}},function(err, char){
                    console.log( 'The Char updated')

                })
                res.redirect(`/characters/${req.params.id}/show`)
            }
            
       })
   }


    function index(req, res){
        console.log('Daaamn...index is firing')
        Character.findById(req.params.id, function(err, name ){
        if (err){
            res.redirect(`/characters/${req.params.id}/show`)
    }else{
       return res.render(`/characters/${req.params.id}/show`,{
           name: req.params.spellbooks.name,

       })
    }
})
    }
