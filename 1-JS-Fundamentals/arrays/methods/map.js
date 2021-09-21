//! The map method allows you to take one array and convert it into a new array that is
//!     populated with the results of the function that is passed through


const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

const foodPrice = foods.map((food) => {
    return food.price;
});
console.log(foodPrice);

const foodNames = foods.map((food) => {
    return food.name;
});
console.log(foodNames);