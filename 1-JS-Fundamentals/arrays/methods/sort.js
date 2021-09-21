//! The sort method will sort the items in an array.  The sort order can be either alphbetic or
//!     numeric, and either ascending or descending.
//? By default, the sort orders the values as strings in alphabetical and ascending order.
//* This method can take in a compare function which indicates if you want to sort by asending or descending

let shoppingList = ["celery", "limes", "lemons", "oranges", "dumplings"];

console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];

console.log(costs.sort((a, b) => a - b));
//ascending order

console.log(costs.sort((a, b) => b - a));
//descending order 