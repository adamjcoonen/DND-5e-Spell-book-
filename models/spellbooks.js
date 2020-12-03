var mongoose = require('mongoose');
const Schema = mongoose.Schema;



const spellsKnownSchema = new Schema({
  content: Object
},
{
  timestamps: true
});



const spellBookSchema = new Schema({
  class: String,
  maxLevel: {
      type: Number,
      enum: [1,2,3,4,5,6,7,8,9]
  },
  restrictedSchools: String,
  spellsKnown: [{
    type: Schema.Types.Object,
    ref: "spellsKnown"
  }],
})

module.exports = mongoose.model('Spellbooks', spellBookSchema)
