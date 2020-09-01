var mongoose = require('mongoose');

let spellBooksSchema = new ({
    class: String,
    level:  String
    

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

module.exports = mongoose.model('Player', plauyerSchema)