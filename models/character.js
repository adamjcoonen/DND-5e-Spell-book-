var mongoose = require('mongoose');
const Schema = mongoose.Schema;


let characterSchema = new Schema({
    name: String,
    class1: String,
    class2: String,
    spellbooks: [
        {
        type: Schema.Types.ObjectId,
        ref: "Spellbook",
        }
    ]
},{
    timestamps: true
})
    module.exports = mongoose.model('Character', characterSchema)