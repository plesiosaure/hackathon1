
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "165a28ee0ce64ed28f30df982d9d2b2c",
  secret: "2454570be6344639874b6b0cb872f015"
});
 
spotify.search({ type: 'track', query: 'beyonce' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  track = data.tracks.items[0];
  var http = require('http');

http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
  var header = '';
  var body = '';
  // concatenate header string
  // concatenate body string
//console.log('<div id="commands"><h1>Play songs through voice commands</h1></div><div id="conversation"></div></main><script>var audio = new Audio();audio.src = ' + track.preview_url + ' ;audio.play();communicateAction(\'<div>Playing' + track.name + ' by ' + track.artists[0].name + '</div><img width="150" src="' + track.album.images[1].url + '">\');function communicateAction(text) {     var rec = document.getElementById(\'conversation\');  rec.innerHTML += \'<div class="action">\' + text + \'</div>\'; }</script>');
return '<div id="commands"><h1>Play songs through voice commands</h1></div><div id="conversation"></div></main><script>var audio = new Audio();audio.src = ' + track.preview_url + ' ;audio.play();communicateAction(\'<div>Playing' + track.name + ' by ' + track.artists[0].name + '</div><img width="150" src="' + track.album.images[1].url + '">\');function communicateAction(text) {     var rec = document.getElementById(\'conversation\');  rec.innerHTML += \'<div class="action">\' + text + \'</div>\'; }</script>';
//return 'hello';
//return track.preview_url;
  };
  });

  



    