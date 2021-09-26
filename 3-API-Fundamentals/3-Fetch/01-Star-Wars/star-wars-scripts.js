
//! let starWarsPeopleList = document.querySelector('ul');

//* Next we need to GET info from StarWars API and format it to display on HTML page.
//* We use FETCH to go GET info form Star Wars API people Endpoint.

//! fetch('https://swapi.dev/api/people')

//* How do we actually get the info back?
//*the FETCH starts a PROMISE; we can use "then()" method to return Promise.
    //*"then()" takes up two arguments: callback functions for success and failure cases of the Promise
//*we're using the success argument and calling it "response"
//* If successful, we'll get a response back from the API and then can do stuff with it.

//! .then(function(response) {
//!     console.log(response)
//! })

//*".json()" method of "Body mixin" takes Response stream and reads it to completion.
//*returns a promise once it's done parsing the body as JSON
//* Now can all ".json()" on the response; then follow with another ".then()" after the Promise resolves, so we can use the json we get back!

/*
let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response) {
    return response.json();
})
.then(function(json) {

});
*/


//*Using the data : can see properties like: "count", "next", "previous", "results"

let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let people = json.results;
});
