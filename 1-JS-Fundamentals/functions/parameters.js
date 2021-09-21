//Function parameters are place holders for data we pass in the function when we invoke it

function hi(name){
    console.log(`Hi ${name}`);      //interpolation -> Have to use back ticks to let JS know we are passing through a variable
}

hi('Isaiah');

//* Challenge: 
/* Write a function that takes two parameters:
    -one parameter is for a first name,
    -the other parameter is for a last name,
    -have them come together in a variable inside the function.
    -console.log 'Hello, my name is <your name>'
    -call (or invoke) your function */

function hi(first, last){
    console.log(`Hello, my name is ${first} ${last}!`);
}
hi('Ginea', 'Merrill');

//* classmates solution

function hello(isaiah, murray){
    console.log(`Hello my name is isaiah murray`);
}

hello();

let me = 'Nolan';
let me2 = 'Trgovac';

function hi(name){
    console.log(`Hi, my name is ${me} $[me2]`);
}
hi();

function hello(firstName, lastName){
    console.log(`Hello my name is ${firstName} ${lastName}`);
}

hello('Isaiah', 'Murray');

//*Instructor solution

function hello(firstName, lastName){
    let fullName = firstName + ' ' + lastName;
    console.log(`Hello, my name is ${fullName}`);
}

hello('Isaiah', 'Murray');