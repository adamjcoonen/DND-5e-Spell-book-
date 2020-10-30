const Player = require('../models/player');
const Character = require('../models/character');
const Spellbooks = require('../models/spellbooks');
const { request } = require('express');
const spellURL = 'https://www.dnd5eapi.co/api/spells='


module.exports = {
    show,
    index,
    addBook,
    listSpells
}


    function show(req, res){
        
        Character.findById(req.params.id, function (err, charName) {
            Spellbooks.find(charName[{}], function(err, bDeats){
            if (err) {
                res.redirect('/characters')
            } else{
            res.render('characters/show', {charName, bDeats})
            }
        })
    })
}

function listSpells(req,res){
    request(sp)
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

    function index(req, res){
        Character.findById(req.params.id, function(err,charId ){
        
            console.log("charID:" ,charId)                
        })
    }