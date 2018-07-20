require("dotenv").config();
var request = require('request');
var keys = require("./keys.js");
var spotify = require('spotify');
var spotify = new Spotify(keys.spotify);
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
var param1 = process.argv[2];
var param2 = process.argv.slice(3).join(" ");

if (param1 === "my-tweets"){
//     var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
client.get('favorites/list', function(error, tweets, response) {
    if(error) throw error;
    console.log(tweets);  // The favorites.
    console.log(response);  // Raw response object.
  });
}
if (param1 === "spotify-this-song"){}

if (param1 === "movie-this"){
    request("http://www.omdbapi.com/?t="+ param2 +"&y=&plot=short&apikey=trilogy", function(error, response, body) {

  if (!error && response.statusCode === 200) {

    console.log("The movie's rating is: " + JSON.parse(body));
  }
});

}
if (param1 === "do-what-it-says"){}
