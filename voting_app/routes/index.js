var express = require('express');
var router = express.Router();
var mysql = require('./db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/v1/getlist', function(req,res,next){
  var query = "SELECT * FROM fruits;"
  mysql.fetchData(function (err, results) {
    if(err) throw err;
    else{
      res.send(results);
    }
  }, query);
});

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
