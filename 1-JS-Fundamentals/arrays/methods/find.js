//! The find method allows you to find a single item in an array

const foods = [
    {name: "bread", price: 100},
    {name: "beef", price: 200},
    {name: "mint", price: 10},
    {name: "shrimp", price: 15},
    {name: "ketchup", price: 500},
    {name: "bell pepper", price: 25},
];

const foundItem = foods.find((item) => {        //? This is known as an Anonymous Function
    return item.name === 'mint'
})

console.log(foundItem);

//* This will return the first object/element in the array that meets the conditions that we specify
//*     So if we have multiple objects that meet the condition, it will only return the first instance of it