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
  var body = 'hello';
  var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "165a28ee0ce64ed28f30df982d9d2b2c",
  secret: "2454570be6344639874b6b0cb872f015"
});
 
var track = spotify.search({ type: 'track', query: 'beyonce' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  var d =  data.tracks.items[0].preview_url;
  return '<!DOCTYPE html>'
       + '<html><header>' + header + '</header><body>' + d + '</body></html>';
});

  // concatenate header string
  // concatenate body string

  return track;
};