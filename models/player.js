var mongoose = require('mongoose');
const Schema = mongoose.Schema;





let playerSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String, 
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Player', playerSchema)