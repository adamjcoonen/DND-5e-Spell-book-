var mongoose = require('mongoose');
const Schema = mongoose.Schema;


let characterSchema = new Schema({
    name: String,
    class1: String,
    class2: String,
    class3: String,
    player: {type: Schema.Types.ObjectId, ref: 'player'},
    spellbook: [
        {
          type: Schema.Types.ObjectId,
          ref: "spellbook",
        },
      ],
},
    {
    timestamps: true
})
    module.exports = mongoose.model('Character', characterSchema)