


var request = require('request');

//get command line args
const args = process.argv;
// Remove first two array elements
args.splice(0, 2);

//setup api call
// let breed = "sib"
let breed = args[0]
console.log(args[0]);

const breedSearch = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

request(breedSearch, function(error, response, body) {
  console.log(error, response)
  var info = JSON.parse(body);
  if (info.length < 1) {
    return console.error("We're sorry, but that search did not result in any matches.")
  }
  if (error === true) {
    return console.error("We're sorry, the page encountered this error: ", error);
  }
  if (!error && response.statusCode == 200) {
    console.log(info[0].description);
  }
})
