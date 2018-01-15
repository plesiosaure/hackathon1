var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
        clientId : "165a28ee0ce64ed28f30df982d9d2b2c",
        clientSecret : "2454570be6344639874b6b0cb872f015",
        redirectUri : 'http://localhost:3000/callback'
      });
// Get an access token and 'save' it using a setter
//var scopes = ['playlist-read-public','playlist-modify-public'];
var scopes = ['playlist-read-private','playlist-modify-private'];
//var authorizeURL = spotifyApi.createAuthorizeURL(scopes);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
//console.log(authorizeURL);
//process.exit();
var authorizationCode = 'AQAlAU7uu2DbIlX-0UlY0s6IlvYiBSYZtzgoEha8re3c9iM-Ylehl7FOaIfBnHvVPKnewIGSWVKpnDvwbx7kkgZmEx_ZkU405psIGhWb8xMHI_TYe1nPP67ctRfh9tCHO07aHxemdRpgbR77PunbFgXTEdqK0SVV10aNO3g_Wv8-ijeNv2IWpK-6oTg5Y-CCZQ2sa5IpMKLO-LfOUIBnuJlHXJYDnK-Qc9nmY-52gDmBabjtCmCB5A3zYlj4rvNjn8cUQg';
spotifyApi.authorizationCodeGrant(authorizationCode)
      
/*spotifyApi.clientCredentialsGrant({
	      'scope' : scopes
	    })*/
  .then(function(data) {
    console.log(data.body);
    console.log('The token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    console.log('The refresh token is ' + data.body['refresh_token']);

   /* spotifyApi.setAccessToken(data.body['access_token']);
    // Do search using the access token
    spotifyApi.searchTracks('artist:Love')
      .then(function(data) {
        
 // Print some information about the results
        console.log('I got ' + data.body.tracks.total + ' results!');

        // Go through the first page of results
        var firstPage = data.body.tracks.items;
        console.log('The tracks in the first page are.. (popularity in parentheses)');

      
        firstPage.forEach(function(track, index) {
          console.log(index + ': ' + track.name + ' (' + track.popularity + ')');
        });
        // Create a private playlist
        spotifyApi.createPlaylist('plougoulmbot', 'My Cool Playlist', { 'public' : true })
          .then(function(data) {
            console.log('Created playlist!');
          }, function(err) {
            console.log('Something went wrong!', err);
          });
     // Add tracks to a playlist
         spotifyApi.addTracksToPlaylist('plougoulmbot', '2aNKjo3bOvhFjMATE5trTV', [data.body.tracks.items.uri])
           .then(function(datas) {
             console.log('Added tracks to playlist!');
           }, function(err) {
             console.log('Something went wrong!', err);
           });

      }, function(err) {
        console.log('Something went wrong!', err);
      });
*/
  }, function(err) {
    console.log('Something went wrong!', err);
  });
  
  
