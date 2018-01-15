var SpotifyWebApi = require('spotify-web-api-node');

var credentials = {
  clientId : "165a28ee0ce64ed28f30df982d9d2b2c",
  clientSecret : "2454570be6344639874b6b0cb872f015",
  redirectUri : 'http://localhost:3000/callback'
};

var spotifyApi = new SpotifyWebApi(credentials);
https://github.com/thelinmichael/spotify-web-api-node/issues/95
// The code that's returned as a query parameter to the redirect URI
var authCode = 'AQAlAU7uu2DbIlX-0UlY0s6IlvYiBSYZtzgoEha8re3c9iM-Ylehl7FOaIfBnHvVPKnewIGSWVKpnDvwbx7kkgZmEx_ZkU405psIGhWb8xMHI_TYe1nPP67ctRfh9tCHO07aHxemdRpgbR77PunbFgXTEdqK0SVV10aNO3g_Wv8-ijeNv2IWpK-6oTg5Y-CCZQ2sa5IpMKLO-LfOUIBnuJlHXJYDnK-Qc9nmY-52gDmBabjtCmCB5A3zYlj4rvNjn8cUQg';

// Retrieve an access token and a refresh token
spotifyApi.authorizationCodeGrant(authCode)
  .then(function(data) {
    console.log('The token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    console.log('The refresh token is ' + data.body['refresh_token']);

    // Set the access token on the API object to use it in later calls
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

