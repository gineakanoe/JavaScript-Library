//! The every method checks the array for a condition and then returns true or false

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

const isExpensive = foods.every((food) => {
    return food.price <= 1000;
});

console.log(isExpensive);  //true

//This can be used to check any object and object property inside of an array