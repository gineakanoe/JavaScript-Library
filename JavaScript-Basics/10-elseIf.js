//Else If Statements

//Syntax

//1
if (condition1) {
    // block of code to be executed if condition1 is true
//2
} else if (condition2) {
    // block of code to be executed if the condition1 is false and condition2 is true
//3
} else {
    // block of code to be executed if the condition1 is false and condition2 is false
}

//Else If Statement Example

let character = 'Wizard';

if (character === 'Bard') {
    console.log('You sing nice songs.')
} else if (character === 'Warrior') {
    console.log('You beat things up.')
} else if (character === 'Rogue') {
    console.log('You use stealth.')
} else if (character === 'Wizard') {
    console.log('You Use magic.')
} else {
    console.log('What type of character is this??')
}

//Order is Important

let temp = 85;

if (temp >= 50) {
    console.log('It is cool')
} else if (temp >= 65) {
    console.log('It is warm.')
} else if (temp >= 80) {
    console.log('It is hot.')
} else {
    console.log('It is cold.')
}

//fix

let temp = 85;

if (temp >= 80) {
    console.log('It is hot.')
} else if (temp >= 65) {
    console.log('It is warm.')
} else if (temp >= 50) {
    console.log('It is cool')
} else {
    console.log('It is cold.')
}