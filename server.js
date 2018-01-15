var express = require('express');
var app = express();


app.get("/",function(req,res){
    res.sendFile(__dirname + "/player.html");
});
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

             var spotifyApi = new SpotifyWebApi({
                 clientId : "165a28ee0ce64ed28f30df982d9d2b2c",
                 clientSecret : "2454570be6344639874b6b0cb872f015"
                 //redirectUri : 'http://www.example.com/callback'
               });
             var datas = JSON.stringify(data);
             console.log(datas);
            //console.log(datas.tracks.items[0].uri);
//             // Add tracks to a playlist
//             spotifyApi.addTracksToPlaylist('plougoulmbot', '2aNKjo3bOvhFjMATE5trTV', [datas.tracks.items[0].uri])
//               .then(function(datas) {
//                 console.log('Added tracks to playlist!');
//               }, function(err) {
//                 console.log('Something went wrong!', err);
//               });
    res.end(datas);
    //res.end(JSON.stringify(results));
    });
});
app.listen(3000);
