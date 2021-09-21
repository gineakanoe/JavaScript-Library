//! The reduce method executes a function for each specified value in an array and returns 
//!     a single value


const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

//? Normally, if you wanted to get the total price of all of the food objects in this array,
//?     you would need to run a loop that adds the price every single time, then return the total price.

// The reduce method simplifies that a lot

                            //1
const total = foods.reduce((currentTotal, food) => {
    //2
    return food.price + currentTotal;
//3
}, 0);

console.log(total);

/*
1. This method takes in two parameters
    The first will be the current sum of the numbers at each iteration
    The second will be the name of what we are iterating over. In this case it's a food item.

2. We look at the price of the food object, then add it to the cureent total. Then we do
    that over and over again until it has gone through each item in the array.
    
3. The 0 at the end specifies what value we are going to start at
    It it's a 0, the total will be 850, and if it's 300 then the total will be 1150
*/