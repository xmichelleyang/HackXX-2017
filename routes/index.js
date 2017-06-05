var express = require('express');
var router = express.Router();
var firebase = require("firebase");
var Chart = require('chart.js');

exports.index = function(req,res){
  res.render('index', {Chart: Chart});
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", {});


});



router.get('/hi', function(req, res, next) {
  var payload = {
    "name": "faiz",
    "bio": "WANDERlust"
  }
  res.json(payload);
});

router.post("/hi", function(req, res, next) {
  console.log(req.body);
  var name = req.body.name;
  res.send("Hello " + name + " how are you?");

  writeUserData(1, name);

});



// Save user Data
function writeUserData(userId, name) {
  firebase.database().ref('users/' + userId).set({
    username: name
  });
}




/*

// Twilip API
client.messages.create({
    to: "+15558675309",
    from: "+15017250604",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",
}, function(err, message) {
    console.log(message.sid);
});
*/

module.exports = router;
