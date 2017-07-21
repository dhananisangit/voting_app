var express = require('express');
var router = express.Router();
var mysql = require('./db');

/* Normal CRUD operations for the voting_app */

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// This API returns a list of fruits.
router.get('/v1/getlist', function(req,res,next){
  var query = "SELECT ID, Name, total_votes FROM fruits ORDER BY total_votes DESC;"
  mysql.fetchData(function (err, results) {
    if(err) throw err;
    else{
      res.send(results);
    }
  }, query);
});

// User authentication
router.post('/v1/login', function(req,res){
    var userDetails = "SELECT ID FROM Users WHERE username='"+req.body.name+"';";
    mysql.fetchData(function(err, userID){
      if(userID.length>0) {
        res.send({"status":"200", 'userID':userID[0].ID})
      }
      else{
        res.send({"status":"400"})
      }
    }, userDetails);
});

// Fetch fruits which the user had voted previously.
router.post('/v1/fetchvotes', function(req, res){
  var userVotes = {}
  var voteDetails = "SELECT Name FROM fruits t1 INNER JOIN votes t2 ON t1.id=t2.fruit_id WHERE t2.user_id="+req.body.userID+";";
  mysql.fetchData(function(err, results){
    if(err) throw err;
    else{
      for(var i=0;i<results.length;i++){
        userVotes[results[i].Name] = 1
      }
      res.send({"status":"200","results":userVotes, 'userID':req.body.userID})
    }
  }, voteDetails)
})


// Updating database when a user votes for a fruit.
router.post('/v1/vote', function(req, res){
  var q = "INSERT INTO votes VALUES ("+req.body.fruitID+", "+req.body.userID+");"
  mysql.fetchData(function (err, results) {
    if(err) throw err;
    else{
      var updateVotes = "UPDATE fruits SET total_votes=total_votes+1 WHERE ID="+req.body.fruitID+";"
      mysql.fetchData(function (err, results) {
        if(err) throw err;
        else{
          res.send(results);
        }
      }, updateVotes);
    }
  }, q);
})


module.exports = router;
