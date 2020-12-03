const Spellbooks = require('../models/spellbooks')
const request = require('request');
const spellbooks = require('../models/spellbooks');
const spellURL = 'https://www.dnd5eapi.co/api/'

module.exports = {
    showBook,
    addSpell
    // deleteSpell
    // spellDets

}





 function showBook(req, res){
    Spellbooks.findById(req.params.id, function(err, spellB){
        let spellClass = spellB.class.toLowerCase();
    request(`${spellURL}/classes/${spellClass}/spells`, function(err, request, body){
        let spells = JSON.parse(body)
    
       res.render('bookDetails/spellbookView',
        {  'spellB': spellB, 'spells': spells})
    })
})
 }

function addSpell(req, res){
    console.log(req.params.id)
    Spellbooks.findById(req.params.id, function(err, spellB){
        request(`${spellURL}/spells/${req.body.spells}`, function(err, request, spellDets){
            if( spellB.spellsKnown.includes(spellDets)) {
                err
            } else {
        spellB.spellsKnown.push(request.body)
        spellB.save(function(err){
            res.redirect(`/bookDetails/${req.params.id}/spellbookView`)
            })
        }
        })
    })
}

