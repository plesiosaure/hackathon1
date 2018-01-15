var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'programming motherfuckers', //mysql database password
  database : 'hackaton' //mysql database name
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all results
app.get('/users', function (req, res) {
   connection.query('select * from users', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to get a single employee data
app.get('/users/:id', function (req, res) {
   console.log(req);
   connection.query('select * from users where id=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to create a new record into mysql database
app.post('/users', function (req, res) {
   var postData  = req.body;
   connection.query('INSERT INTO users SET ?', postData, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to update record into mysql database
app.put('/users', function (req, res) {
   connection.query('UPDATE `users` SET `username`=?,`votes`=? where `id`=?', [req.body.username,req.body.votes], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to delete record from mysql database
app.delete('/users', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `users` WHERE `id`=?', [req.body.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
});



//preferences

//rest api to get all results
app.get('playlists', function (req, res) {
   connection.query('select * from preferences', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to get a single employee data
app.get('/preferences/:id', function (req, res) {
   console.log(req);
   connection.query('select * from preferences where id=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to create a new record into mysql database
app.post('/preferences', function (req, res) {
   var postData  = req.body;
   connection.query('INSERT INTO preferences SET ?', postData, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to update record into mysql database
app.put('/preferences', function (req, res) {
   connection.query('UPDATE `preferences` SET `id_user`=?,`preferences`=?, `votes`=? where `id`=?', [req.body.id_user,req.body.preferences, req.body.votes], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//rest api to delete record from mysql database
app.delete('/preferences', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `preferences` WHERE `id`=?', [req.body.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
});

//rest api to get all results
app.get('/callback', function (req, res) {
   //echo get code;
	  res.end('OK');
});




    

   