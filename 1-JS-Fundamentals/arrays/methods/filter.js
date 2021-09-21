//! The filter method allows us to go through an array an return or filter out parameters that
//!     meet or don't meet a specific condition

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

const filterPrice = foods.filter((foundItem => {
    return foundItem.price <= 100;
}));

console.log(filterPrice);

const filteredName = foods.filter((item) => {
    return item.name.startsWith("b");
});

console.log(filteredName);