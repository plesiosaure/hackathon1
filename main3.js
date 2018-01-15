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
/*var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
*/
//rest api to get all results


//rest api to get a single employee data
app.get('/tracks/:id', function (req, res) {
   //console.log(req);
   /*connection.query('select * from users where id=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});*/
    var Spotify = require('node-spotify-api');
 
    var spotify = new Spotify({
      id: "165a28ee0ce64ed28f30df982d9d2b2c",
      secret: "2454570be6344639874b6b0cb872f015"
    });

    spotify.search({ type: 'track', query: [req.params.id] }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     //var open = require('opn');
    //open(data.tracks.items[0].external_urls.spotify); 
    //open(data.tracks.items[0].preview_url); 
    //console.log(data.tracks.items[0]);
    //return data.tracks.items[0];
   //console.log(data);
   var SpotifyWebApi = require('spotify-web-api-node');
 
    var spotifyApi = new SpotifyWebApi();
    var data = JSON.stringify(data);
    console.log(data.tracks.items[0].uri);
    // Add tracks to a playlist
    spotifyApi.addTracksToPlaylist('plougoulmbot', '2aNKjo3bOvhFjMATE5trTV', [data.tracks.items[0].uri])
      .then(function(data) {
        console.log('Added tracks to playlist!');
      }, function(err) {
        console.log('Something went wrong!', err);
      });
    res.end(JSON.stringify(data));
    //res.end(JSON.stringify(results));
    });
    
    
});


    

   