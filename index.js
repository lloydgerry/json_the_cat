

const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("We're sorry, the page encountered this error: ", error);
  } else {
    console.log(desc);
  }
});