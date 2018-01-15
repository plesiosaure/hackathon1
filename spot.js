/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');




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
app.get('/tracks', function (req, res) {
    var Spotify = require('node-spotify-api');
 
    var spotify = new Spotify({
      id: "165a28ee0ce64ed28f30df982d9d2b2c",
      secret: "2454570be6344639874b6b0cb872f015"
    });

    spotify.search({ type: 'track', query: 'beyonce' }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     //var open = require('opn');
    //open(data.tracks.items[0].external_urls.spotify); 
    //open(data.tracks.items[0].preview_url); 
    //console.log(data.tracks.items[0]);
    //return data.tracks.items[0];
   console.log(data);
    //res.end(data);
    //res.end(JSON.stringify(results));
    });
	res.end('hello');  
	//});
});

