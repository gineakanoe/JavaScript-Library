//! The push method adds an element to the end of an array

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

console.log("Before: ", foods);

foods.push({name: "avacado", price: -50});

console.log("After: ", foods);