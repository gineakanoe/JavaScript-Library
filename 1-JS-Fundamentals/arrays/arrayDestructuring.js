//* Array Destructuring allows you to unpack values from arrays, or object properties from an object, and store them in distinct variables

const fullName = ['Isaiah', 'Murray', 'Mr', {month: 9, date: 5, year: 1989}];  //added 'Mr' and {...} for Rest Syntax example

// const firstName = fullName[0];          //took fullName variable and added its position?  [0] <- what is this again?
// const lastName = fullName[1];

const [firstName, lastName, ...otherInfo] = fullName;     //creating new variables using array destructuring and saying that [0] aka firstName = fullName[0] aka 'Isaiah'
                                                          //added [...otherInfo] for Rest Syntax example; must do [...variable] last.  It logs everything after the ...

console.log(fullName); // [ 'Isaiah', 'Murray']

console.log(firstName); // Isaiah                         //firstName variable logs what it has been connected to in above array
console.log(otherInfo); // [ 'Mr', { month: 9, date: 5, year: 1989 } ]                    

//! REST SYNTAX
//* Rest syntax looks like spread syntax, but does the opposite.
//* Rest syntax will collect multiple elements and condense them into a single element.
//? Rest operator must be the last element defined when using array destructuring.

const fullName = ['Isaiah', 'Murray', 'Mr', {month: 9, date: 5, year: 1989}, 'test', 15, true, 'test two', false];

const [firstName, lastName, , , ...otherInfo] = fullName;  //after lastName variable, added ' , , ' these skip over [3] and [4]; 'Mr' and '{etc}' and then calls all the other info

console.log(otherInfo);   // [ 'test', 15, true, 'test two', false]
