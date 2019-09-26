
const request = require('request');

//get command line args
// const args = process.argv;
// Remove first two array elements
// args.splice(0, 2);


// let breed = "sib"
// let breedName;
// console.log(args[0]);


const fetchBreedDescription = function(breedName, callback) {
  //setup api call
  const breedSearch = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(breedSearch, function(error, response, body) {
    if (error == true) {
      return callback(error, null)
      // return console.error("We're sorry, the page encountered this error: ", error);
    }
    let info = JSON.parse(body);
    if (info.length < 1) {
      let output = "We're sorry, but that search did not result in any matches."
      return callback(null, output)
    }
    if (!error && response.statusCode === 200) {
     let output = info[0].description;
     callback(null, output)
    }
  });
};

module.exports = { fetchBreedDescription };
