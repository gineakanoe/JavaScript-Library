// Functions expressions are functions stored within variables

let hey = function hi() {
    console.log('HI');
}
console.log(hey);   //?Doesn't run function, but tells you what the function is
hey();              //?Runs function
// Function declarations gets hoisted
// Function expression does not

