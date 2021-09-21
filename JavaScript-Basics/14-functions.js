//Functions

//Declaration
function hello() {
    console.log("Hello World");
}

//Activating a Function
hello(); // invokes the function hello.

hello();
hello();
hello();

//Parameters and Arguments

//Function with one parameter
function numberEntered(num){
    console.log(`The number you entered was: ${num}`);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

//Function with two parameters
function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

//Practice
//Declare it
function subtractTwoNumbers(firstNum, secondNum){console.log(firstNum - secondNum);
}

//Call it
subtractTwoNumbers(5, 7);

//Return Keyword
function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats ;

    return myAverage;
}
console.log(getMyBattingAverage(250, 91)); // = 0.364

//Practice

//Sum of two numbers
function add(x, y){
    let sum = x + y;
    return sum;
}
console.log(add(1,1));

//First name last name return whole name
function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName;
}
console.log(fullName("Paul", "O'Connor"));

//Challenge

//Function to calculate and return the totalPrice of a quantity of products, including 7% tax

function calculatePrice(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}
console.log(calculatePrice(17, 5));


function calc (x, y, z,) {
    if (z === "+") {
        console.log(x + y);     
    } else if (z === "-") {
        console.log(x - y)
    } else if (z === "*") {
        console.log(x * y)
    } else is (z === "/") {
        console.log(x / y)
    } else {
        console.log("unexpected input")
    }
}


