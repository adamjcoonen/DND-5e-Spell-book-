var mongoose = require('mongoose');

let spellBookSchema = new mongoose.Schema({
    class: String,
    level:  String


})

let characterSchema = new mongoose.Schema({
    name: String,
    class1: String,
    class2: String
})

let playerSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    spellBooks: [spellBookSchema],
    googleId: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema)