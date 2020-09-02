const Player = require('../models/player');



module.exports = {
    // index,
    addcharacter
    // addPlayerData
}


// function addPlayerData(req, res, ne){
//   console.log("yo what up")
// }
// function index(req, res, next) {
   
    
//       }



function addcharacter(req, res , next){
    req.user.characer.push(req.body);
    req.user.save(function(err){
        res.redirect('/');
    })

}