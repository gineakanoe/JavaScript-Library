//Conditionals Intro

//You are trying to decide what to cook based off of what is in the refrigerator.
//If you have Ground Beef, you'll make Hamburgers.
//If you have Salmon, you'll make Grilled Salmon.
//If you have Chicken, you'll make Chicken Tacos.
//If you don't have anything, you'll order out.

let ingredients = "Chicken"

if (ingredients === "Ground Beef"){
    console.log("I'll make Hamburgers.")
} else if (ingredients === "Salmon") {
    console.log("I'll make Grilled Salmon.")
} else if (ingredients === "Chicken"){
    console.log("I'll make Chicken Tacos.")
} else {
    console.log("I guess I should order something")
}

//If Statements

//Syntax
//1     //2
if (condition) { //3
// block of code to be executed if the condition is true
};

//Examples

//Example 1
if (10 > 5) {
    console.log("Ywp, 10 is greater than 5");
};

//Example 2
ir (10 < 5) {
    console.log("This code will not run! 10 is not greater than 5.");
};

