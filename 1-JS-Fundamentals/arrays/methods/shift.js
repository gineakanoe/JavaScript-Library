//! The sift method removes the first element from an array and returns that removed element
//? This method changes the length of the array

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

console.log(`Before: ${foods}`);
let firstObject = foods.shift();
console.log(`After: ${foods}`);
console.log(`shifted Items: ${firstObject}`);