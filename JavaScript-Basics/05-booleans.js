YES / NO 
ON / OFF 
TRUE / FALSE 

//examples
let isLoggedIn = true;
let isAuthenticated = true;
let hasLoggedInToday = false;
let hasToken = false;

//Comparison/Relational Operators
console.log(2 == '2') // true
console.log(2 === '2') // false
console.log(2 != 3) // true
console.log(2 !== '2') // true 
console.log(5 > 5) // false
console.log(5 >= 5) // true
console.log(7 < 8) // true
console.log(8 <= 8) // true

//Extra Practice
console.log(2 > 1);
console.log(3 < 2);

let test = 2 >= 3;
console.log(test);

console.log("Password12!" === "Password12!!");
console.log(1 !== 2);
console.log(10 !== 10);

//Logical Operators
// AND (&&)
// OR (||)
// NOT (!)

let x = true;
let y = false;

console.log(x&&y) // false
console.log(x||y) // true
console.log(!x) // false

// Extra Practice
console.log("&& :", 2===2 && 1===1 ); // true
console.log("|| :", 2===2 || 2===1 ); // true
console.log("!=", 2 != 1); // true
