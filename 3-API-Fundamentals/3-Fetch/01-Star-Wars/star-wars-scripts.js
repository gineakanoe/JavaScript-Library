
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
! let starWarsPeopleList = document.querySelector('ul');

! fetch('https://swapi.dev/api/people')
! .then(function(response) {
!    return response.json();
! })
! .then(function(json) {

! });
*/


//*Using the data : can see properties like: "count", "next", "previous", "results"
//*When console.log, "results" is an array with 10 objects which contain our people info.
//*We then can capture that infor in a variable.


//! let starWarsPeopleList = document.querySelector('ul');

//! fetch('https://swapi.dev/api/people')
//! .then(function(response) {
//!     return response.json();
//! })
//! .then(function(json) {
//!     /*console.log(json)*/
//!     let people = json.results;
//! });


//* GETTING RESULTS TO THE HTML
    //* our 'people' is an array of objects
        //*Remember, 'for...of' lets us iterate over values in an array
        //*Remember, 'for...in' will print out the properties
        //* console.log both to decide how to handle data

//! let starWarsPeopleList = document.querySelector('ul');

//! fetch('https://swapi.dev/api/people')
//! .then(function(response) {
//!     return response.json();
//! })
//! .then(function(json) {
//!    /*console.log(json)*/
//!    let people = json.results;

//!    for(p of people) {          //Returns object names and details
//!         console.log(p);
//!     }
//!     for(p in people) {          //Returns object number (0-9)
//!        console.log(p);
//!    }
//! });
        

//*PUTTING TEXT IN OUR LIST ITEMS
    //*Using ".innerHTML()" we can grab the value of the inner HTML value.
        //*We're gonna put a '<p>' tag with the name inside in our HTML without manually writing it.
        //*In our 'for...of' loop, we're refering to each object as 'p' 
            //*Now we can access the name via 'p.name'.

//! let starWarsPeopleList = document.querySelector('ul');

//! fetch('https://swapi.dev/api/people')
//! .then(function(response) {
//!     return response.json();
//! })
//! .then(function(json) {
//!    /*console.log(json)*/
//!    let people = json.results;

//!    for(p of people) {         
//!         let listItem = document.createElement('li');
//!         listItem.innerHTML = '<p>' + p.name + '</p>'
//!     }
//! });


//*ADDING THE LIST ITEMS TO THE LIST
    //*We now have our list item with the name inside it
    //*Now to place all these list Items inside our unordered list:
        //*We have a variable for 'ul' already called 'starWarsPeopleList'
        //*Use '.appendChild()' method to add a node to the end of the list of children of a specified parent node.


let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    /*console.log(json)*/
    let people = json.results;

    for(p of people) {          
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>'
        starWarsPeopleList.appendChild(listItem);
    }
});

//*REFRESH HTML PAGE
    //*We should now see some people names from our Star Wars API

//*WHAT WE DID
/*  1. Made request to Star Wars API
    2. Received a response from Star Wars API
    3. Turned that response into something we could use
    4. Displayed info from Star Wars API in our HTML
*/

//* WITH PLANETS        
        //! Just replaced 'people' with 'planets'

let starWarsPlanetsList = document.querySelector('ul');

fetch('https://swapi.dev/api/planets')
.then(function(response) {
    return response.json();
})
.then(function(json) {
    let planets = json.results;

    for(p of planets) {          
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>'
        starWarsPlanetsList.appendChild(listItem);
    }
});


