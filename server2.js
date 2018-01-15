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
    var SpotifyWebApi = require('spotify-web-api-node');

    var spotifyApi = new SpotifyWebApi({
        clientId : "165a28ee0ce64ed28f30df982d9d2b2c",
        clientSecret : "2454570be6344639874b6b0cb872f015"
        //redirectUri : 'http://www.example.com/callback'
      });
      spotifyApi.searchTracks(req.params.id, function(err, data) {
            if (err) {
              console.error(err);
            } else {
              console.log('Search by ' + req.params.id, data.body);
                var datas = JSON.stringify(data.body);

                res.end(datas);
            }
          
    
            
    });
});
app.listen(3000);
