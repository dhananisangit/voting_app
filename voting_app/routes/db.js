var mysql = require('mysql');

var connection = mysql.createConnection({
  connectionLimit : 100, //important
  host : 'localhost',
	user : 'root',
	password : '1234',
	database : 'voting_app_schema',
	port : 3306
});

connection.connect();

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
