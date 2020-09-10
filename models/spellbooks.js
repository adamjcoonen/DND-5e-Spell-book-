var mongoose = require('mongoose');
const Schema = mongoose.Schema;





let spellBookSchema = new Schema({
    class: String,
    maxLevel:  {
      type: Number
    },
   restrictedSchools: {
        type: String,
        ref: "spellbook",
        enum: ['Transmutation', 'Evocation', 'Conjuration', 'Abjuration', 'Necromancy','Transmutation'],
      },
    spellsKnown: Array
    
})

module.exports = mongoose.model('Spellbooks', spellBookSchema)
