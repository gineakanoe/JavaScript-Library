//! The spred operator is an E6 feature that expands the contents of an array and takes it
//!     out of its array structure
//? It is indicated by 3 dots => ...array

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

console.log(...foods);

const fullName = ['Isaiah', 'Murray'];      //Array

const copiedName = [...fullName];           //spred operator must be in array square braces '[]'
console.log(copiedName);                    //looks similar to orig array, but it added spaces between the variable and the square brace [] 