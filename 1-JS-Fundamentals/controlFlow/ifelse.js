let weather = 75;

if (weather < 65) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket needed.');
};


//* Challenge
/*
!Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console loge 'Hello, what is your name?'
!Silver:
    If it is your name, console log 'Hello, my name is <name>'
!Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let Ginea = true;

if (Ginea) {
    console.log('Hello Ginea');    
} else {
    console.log('Hello, what is your name?');
};


let Ginea = false;

if (Ginea) {
    console.log('Hello, my name is Ginea!');    
} else {
    console.log('Hello, is your name Ginea?');
};


//* Instructor Solution

//!Bronze:
let name = 'Ginea';

if ('Ginea' === name) {
    console.log(name);
} else {
    console.log('Hello, what is your name?');
};

//!Silver
let name = 'Ginea';

if ('Ginea' === name) {
    console.log(`Hello, my name is ${name}!`);
} else {
    console.log('Hello, what is your name?');
};

//!Gold

let name = 'Lea';

if ('Ginea' === name) {
    console.log(`Hello, my name is ${name}!`);
} else {
    console.log(`Hello,is your name ${name}?`);
};



//* Challenge

/* Use this string: let name = 'zAchARy';

!Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'

!Silver
    If the first letter of a string is uppercase, only console.log that letter
    If it is not, console.log the rest of the string without the first letter, and change them to lowercase

!Gole
    If the first letter of a string is uppercase, console.log that first letter of a string plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

//* Hints
//* How to split a string into individual parts
//* How to uppercase a string
//* How to lowercase a string

let str = 'zAchARy';            
const str2 = str.charAt(0);         //seperates each character individually

console.log(str2);

let str = 'zAchARy';
const str2 = str.toUpperCase(0)     //uppercases the whole string

console.log(str2);

let str = 'zAchARy';
const str2 = str.toLowerCase(0)     //lowercases the whole string

console.log(str2);

let str = 'zAchARy';
const str2 = str.slice(1);          //Starts string at '1' placement instead of '0'

console.log(str2);

let str = 'zAchARy';
const str2 = str.charAt(0).toUpperCase(0) + str.slice(1);   //uppercases first charcter plus the slice that starts at '1' placement

console.log(str2);


//* Instructor Solution

//* Bronze

let name = 'zAchARy';
console.log(name[0])
console.log(name.charAt(0))

if (name[0] ===name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log('This is not written correctly');
};

//* SIlver

let name = 'zAchARy';

if (name[0] === name[0].toUpperCase()) {
    console.log(name[0]);
} else {
    console.log(name.slice(1).toLowerCase());
};

//* Gold

let name = 'zAchARy';

if (name[0] === name[0].toUpperCase()) {
    let = isUppercase = name[0] + name.slice(1).toLowerCase()
    console.log(`1: ${isUppercase}`);
} else {
    let notUppercase = name[0].toUpperCase() + name.slice(1).toLowerCase()
    console.log(`2: ${notUppercase}`);
};

// Else If

/*
Create an else if statement that checks the following:
If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
If the age is at least 18, console.log 'You can vote!'
If age is at least 21, console.log 'You can drink!'
If the age is at least 15, console.log 'You can rent a car!'
*/

let age = 108;

//? This breaks at any number greater that 18 due to the order
if (age >= 18) {
    console.log('You can vote!');
} else if (age >= 21) {
    console.log('You can drink!');
} else if (age >= 25) {
    console.log('You can rent a car!');
} else {
    console.log('You are too young to do anything.');
};

//? Working version.  -Start with the highest value
let age = 23;

if (age >= 25) {
    console.log('You can rent a car!');
} else if (age >= 21) {
    console.log('You can drink!');
} else if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You are too young to do anything.');
};
