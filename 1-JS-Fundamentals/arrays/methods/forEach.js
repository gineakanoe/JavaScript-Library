//! The .forEach doesn't actually return anything
//! It executes a function once for each element in the array

const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];

  foods.forEach((item) => {
      console.log(item.price)
  })