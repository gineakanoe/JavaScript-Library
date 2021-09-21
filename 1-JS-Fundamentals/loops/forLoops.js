//      1         2      3
for (let i = 0; i < 10; i++) {              //? 'for' is the keyword for a loop     //? 'i++' is shorthand for 'i+1'
    console.log(i);
};

/*  1. Initial expression (where the for loop starts)
    2. Condition (what the for loop is checking each time it iterates)
    3. Increment expression (ex: adding or subtracting each iteration)
*/

//* Challenge: using a for loop, count to 20, by 2's

for (let i = 0; i < 21; i+=2) {
    console.log(i);
};

// Instructor Solution

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
};

// Start at 10 count down to 0

for (let i = 10; i >= 0; i--) {
    console.log(i);
};

// Start at 25 count down to 0 by -2

for (let i = 0; i >= -25; i -= 2) {
    console.log(i);
};

//* Challenge: using a for loop, go through a name and display each letter individually
        //* Hint: Look up string properties. How can you stop the for loop at the end of a string?

let str = 'Ginea';                               

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
};

// Instructor Solution

let name = 'Danielle';
// console.log(name.length);
// console.log(name[5]);

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
};

//*

let dogs = ['Shiba Inu', 'Husky', 'Corgi', 'Lab']
                                                     //? 'i' variable is pretty stamdard use, but it can be anything
for (let pup = 0; pup < dogs.length; pup++) {               
    console.log(dogs[pup]); 
;}

//* Challenge: Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

let sum = 0;                                    //! Fail
const add

for (let sum = 0; sum <= 1275; sum++) {
    console.log(sum);
};

sum;  i; sum = 0;                       //! Fail

for (let sum = 0; i <= 50; ++i) {
    console.log(sum[i]);
};

// Instructor Solution

let sum = 0; 

for (let i= 1; i <= 50; i++) {
    sum += i;
    //console.log(sum);               //? Shows the process
}

    console.log(sum);                //? Shows just the total sum when outside the curly braces


// Quiz Functions

for (let j = 0; j < 5; j++) {
    console.log(j + " ")
}

for (let j = 10; j > 5; j--) {
    console.log(j);
}

let count = 0;
for ( ; count < 9; ++count){
    console.log(count);
}

function sum(a, b) {
    return a + b;
}
console.log(sum(1,2,3,4)); //?3. When too many arguments are supplied to a function, they will be ignored. The sum() function only takes 2 arguments so the extra arguments (3 and 4) will be ignored.

function foo(){
    return bar();
    function bar() {
        return "Poppin' bottles";
    }
}
console.log(foo());  //? Poppin' bottles

function whatDoesItDo(color) {
    if (color !== 'blue' || color !== 'green') {
        color = 'red';
    }
    return color;
};
console.log(whatDoesItDo());