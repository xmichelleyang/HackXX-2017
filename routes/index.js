var express = require('express');
var router = express.Router();
var firebase = require("firebase");




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



function writeUserData(userId, name) {
  firebase.database().ref('users/' + userId).set({
    username: name
  });
}


module.exports = router;
