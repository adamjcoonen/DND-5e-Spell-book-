var mongoose = require('mongoose');
const Schema = mongoose.Schema;





let spellBookSchema = new Schema({
  class: String,
  maxLevel: Number,
  restrictedSchools: String,
  spellsKnown: Array
})

module.exports = mongoose.model('Spellbooks', spellBookSchema)
