let num = 6;

(num > 0) ? console.log('yes') : console.log('no')

//* Same thing but written two different ways

if (num > 0) {
    console.log('yes')
} else {
    console.log('no')
}

//? When not to use a ternary
//? If there are more than two options, ternaries become messy and difficult to read
let myAge = 10;

(myAge >= 25) ? console.log('Yay! You can rent a car!') : (myAge >= 21) ? console.log('Yay! You can drink!') : (myAge >= 18) ? console.log('Yay! You can vote!') : console.log("Sorry, you're too young to do anything fun.");
