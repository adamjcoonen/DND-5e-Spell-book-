var mongoose = require('mongoose');
const Schema = mongoose.Schema;





let spellBookSchema = new Schema({
    class: String,
    level:  String,
    
})

module.exports = mongoose.model('Player', playerSchema)
