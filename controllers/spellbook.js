const Spellbooks = require('../models/spellbooks')
const request = require('request');
const spellURL = 'https://www.dnd5eapi.co/api/'

module.exports = {
    showBook,
    addSpell
    // deleteSpell
    // spellDets

}





 function showBook(req, res){
    Spellbooks.findById(req.params.id, function(err, spellB){
        console.log(spellB, "I guess this is something")
        let spellClass = spellB.class.toLowerCase();
    request(`${spellURL}/classes/${spellClass}/spells`, function(err, request, body){
        let spells = JSON.parse(body)
    
       res.render('bookDetails/spellbookView',
        {  spellB, 'spells': spells})
    })
})
 }

function addSpell(req, res){
    console.log("the book Id")
    request(`${spellURL}/spells/${req.body.spells}`, function(err, request, spellDets){
        
        
    })
}