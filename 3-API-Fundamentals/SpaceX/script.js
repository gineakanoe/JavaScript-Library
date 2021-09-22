const baseURL = 'https://api.spacexdata.com/v3/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

const formSubmit = document.getElementById('submit');
formSubmit.addEventListener('click', fetchSpace);

function fetchSpace(){
    event.preventDefault();
    //1
    fetch(baseURL)
        .then(response => {
            console.log(response);
            //2
            return response.json();

        })
        .then(json => {
            //3
            displayRockets(json);
        })
        //4
        .catch(error => {
            console.log(error);
        })
}

function displayRockets(rocketsJson){
    console.log("API Rockets: ", rocketsJson);
    rocketsJson.forEach(r => {
        console.log(r.rocket_name);
        let rocket = document.createElement('li');

        rocket.innerText = r.rocket_name;
        spaceShips.appendChild(rocket);

    })
}
//*Challenge

//fetchSpace();

//When we click the submit button, the fetchSpace function should invoke

/*  -didn't figure up - 
document.getElementById('submit').addEventListener('click', (event) =>
{event.target}); */

//*Instructor Solution
/*
-Added to above function-
const formSubmit = document.getElementById('submit');
formSubmit.addEventListener('click', fetchSpace);
*/


/*

! We fetch data from the API, then we turn that data into a JSON Object, 
! then we pass it into another function to manipulate that data

1 => The fetch method starts the process of fetching a resource from a network or an API.
     It will return a promise which is fulfilled once the response is available.

2 => When we capture the result(or response) from an API in a promis resolver,
     it is recieved as JSON which we need to convert into JavaScript Object.
     We do this using the .json() method. This returns another promis to be resolved.

3 => After we turn our respose into a json object, we chain another .then() to pass
     the data into another function so we manipulate it and do stuff with it.

4 => If an error occurs, the .catch() will receive it so we can do stuff with it
     or console.log it.  It is best practice to always have a .catch() statement */
