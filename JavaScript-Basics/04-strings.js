//String Examples
console.log("I was born in Indianapolis.");
console.log("I've lived in three states.")
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it.  It's gone now.");

//Variables
let tweet = "Lebron is king! Westbrook for president!";
let facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
const username = 'jamespauloconnor';

//Concatenation
let birthCity = "Indianapolis";
let birthState = "Indiana";

console.log(birthCity + "," = birthState);

//Interpolation

let greeting = "Hello";
let firstName = "Finn";
let lastName = "Mertens";

console.log(`${greeting}! My name is ${firstName} ${lastname}. Nice to meet you!`);

console.log(greeting + "! My name is " + firstName + " " + lastName + ". Nice to meet you!"); //same sentence but using concatenation

//Challenge
let birthCity = "Indianapolis";
let birthState = "Indiana";

console.log(birthCity + "," = birthState);

//Strings and Numbers

let cats = "3";
console.log(cats + 2); //You won't get 5! That's a lot of cats!

let ageInAugust = 40;
let highSchool = "Bill Murray High School";
let graduatedHighSchool = 1994;
console.log(`${highSchool}, ${graduatedHighSchool}`);
console.log(`My age in August:, ${ageInAugust}`);

//Another Challenge

let gradYear = 1994
let highSchool = "Bill Murray High School";
console.log(`I graduated from ${highSchool} in ${gradYear}`);

//String Methods

//length - returns that length of a string (including space)
console.log(highSchool.length);

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array (more on the datatype later) on each speace ['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(0, 11)); //extracts the first 12 characters: from character 0(the first character) to character 11


