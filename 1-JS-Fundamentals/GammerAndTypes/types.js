// Boolean
// Only has two possible values: true or false
let on = true;
let off = false;
console.log(on);        //Using extention code runner - 'ctrl + alt + n' runs console
console.log(off);       //Can aslo use f8 to run console in terminal

// Null
// Empty value. Think of it like an empty conatiner
let empty = null;
console.log(empty);

// Undefined
// No value is assigned and does not act as an empty container
let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

// Numbers
// Literally just numbers...
let degrees = 90;
console.log(degrees);

let precise = 999999999999999       // Can log numbers up to 15 places 
console.log(precise)

let rounded = 9999999999999999      // Beyond 15 places, numbers are rounded up
console.log(rounded)

let notQuite = 0.2 + 0.1;           // Can do math with JS
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 *10) / 10;
console.log(numbersAreHard);

// Strings
// Used to represent text and are wrapped in either single quotes or double quotes (and back ticks)

let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `back ticks`;

console.log(stringOne, stringTwo, stringThree);

// Numbers vs. Strings
let first = 1050 + 100              //adds numbers 
let second = '1050' + '100';        //adds strings together; no math
console.log(first);                 //? Cool tip: 'ctrl + shift + downArrow' copies code to the next line
console.log(second);

console.log(typeof first);
console.log(typeof second);

// Object                                                               //? Objects will be your best friend XD
// Objects are used to store many values instead of a singular one      //? Objects use curly braces {}
let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
};

console.log(frodo);
console.log(typeof frodo);

// Array                                                                   //? Arrays are classified as 'Objects' in JavaScript
// Arrays are containers that hold a list of items                         //? Arrays use square brackets []
let list = ['item1', 'item2', 'item3']

let anotherList = ['string', 10, true, null, undefined, {object: true, number: 20}];

console.log(anotherList);
console.log(typeof anotherList);  //Object
//An object is a container that holds multiple dateTypes, so since arrays are also containers
//JS has classified them as objects and not a dataType of their own

// Datatypes Literals
// A literal represents a fixed value that we as developers insert into the code

// String literal
let car = 'ford';

// Numeric literal
let december = 12;

// Boolean literal
let tired = true;

// Object literal
let soups = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'cereal',
    d: 'chili'
};

// Dot notation
console.log(soups.c);

// Array literal
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(days);
console.log(days.toString());
//this is a method that comes built into JS to help us seperate an array into strings

console.log(days.length);
//this is a method that will tell us the length of the array, of how many items are in it
