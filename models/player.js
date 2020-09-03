var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let spellBookSchema = new Schema({
    class: String,
    level:  String


})

let characterSchema = new Schema({
    name: String,
    class1: String,
    class2: String
    
},{
    timestamps: true
})

let playerSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    character: [characterSchema],
    googleId: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema)