const Player = require('../models/player');
const Character = require('../models/character');
const Spellbooks = require('../models/spellbooks');
const { render } = require('ejs');


module.exports = {
    show,
    index,
    // createSpell,
    addBook,
}

// function index(req, res) {
    
    // Character.find({'player': {$in: req.user._id}}, function(err, characters) {
    //     res.render('characters/spellbook', {characters, title: 'my characters'})
    // });
    

    function show(req, res){
        
        Character.findById(req.params.id, function (err, charName) {
            Spellbooks.findById(charName.spellbooks, function(err, bDeats){
                console.log(bDeats)
            if (err) {
                res.redirect('/characters')
            } else{
                console.log('The is book details', bDeats)
            res.render('characters/show', {charName, bDeats})       
            }
        })
    })
}

   function addBook(req,res){
       let nBook =  { 
        class: req.body.class,
        maxLevel: req.body.maxLevel,
        restrictedSchools: req.body.restrictedSchools,
    } 
    const newBook = new Spellbooks(nBook)
    
       newBook.save(function(err) {
           if(err) {
            res.redirect(`/characters/${req.params.id}/show`)
            console.log(nBook, "nBook redirect")
            
            } else {
            console.log("it was a success!!!", newBook)
            Character.findById(req.params.id, function(err,char ){
                console.log("this is spellbooks:", char.spellbooks)
                console.log("nbook ID!!!!!", nBook)
                char.spellbooks.push(newBook.id)
                char.save(function(err){
                console.log("char:", nBook,'The Char updated')                
                res.redirect(`/characters/${req.params.id}/show`)
            })
            })
       }
    })
}

    function index(req, res){
        Character.findById(req.params.id, function(err,charId ){
        
            console.log("charID:" ,charId)                
        })
    }