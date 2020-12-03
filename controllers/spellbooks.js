const Character = require('../models/character');
const Spellbooks = require('../models/spellbooks');
const request = require('request');
const spellURL = 'https://www.dnd5eapi.co/api/spells'



module.exports = {
    show,
    addBook,
    delete: deleteBook,
    // listSpells
}





function deleteBook(req, res) {
    Spellbooks.findByIdAndDelete(req.params.id, function(err) {
        res.redirect(`${req.headers.referer}`);
    });
};





function show(req, res){
Character.findById(req.params.id, function (err, charName) {
    Spellbooks.find(charName[{}], function(err, bDeats){ 
    if (err) {
        res.redirect('/characters')
    } else{
    res.render('characters/show', {charName, bDeats}  )
        }
    })
    })
}






   function addBook(req,res){
       let nBook =  { 
        class: req.body.class,
        maxLevel: parseInt(req.body.maxLevel),
        restrictedSchools: req.body.restrictedSchools,
    } 
    const newBook = new Spellbooks(nBook)
    
       newBook.save(function(err) {
           if(err) {
            res.redirect(`/characters/${req.params.id}/show`)
            
            } else {
            Character.findById(req.params.id, function(err,char ){
                char.spellbooks.push(newBook.id)
                char.save(function(err){               
                res.redirect(`/characters/${req.params.id}/show`)
            })
            })
       }
    })
}



  

      


// here is where we add spells, this will call the api and push the api url into the spellbook 