//! The slice method will return a copy of the specified portion of an array
//? The portion is specified by the index given in the parameters

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

console.log(foods.slice(2, 4));

//? If the second number is not included, if displays the whole rest of the list

console.log(foods.slice(2, ));