var mysql = require('mysql');

// Local DB config
var connection = mysql.createConnection({
  connectionLimit : 100,
  host : 'localhost',
	user : 'root',
	password : '1234',
	database : 'voting_app_schema',
	port : 3306
});

connection.connect();

// Generic function which will be invoked multiple time
// Will fetch the results of whatever query passed to it.
function fetchData(callback, sqlQuery){
		connection.query(sqlQuery, function(err, rows, fields){
			if(err){
				console.log("ERROR: " + err.message);
			}
			else{
				callback(err, rows);
			}
		});
  }


exports.fetchData = fetchData;
exports.connection = connection
