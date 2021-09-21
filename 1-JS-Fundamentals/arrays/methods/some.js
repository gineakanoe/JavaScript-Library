//! The some method checks the array for a condition and then returns true or false.
//!     Only one item in array has to meet the condition for it to return true.

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

const hasBeef = foods.some((food) => {
    return food.name === 'beef';
});

console.log(hasBeef);
