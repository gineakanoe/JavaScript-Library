//! The includes method checks if the array 'includes' a certain value/object, then returns true or false

const nums = [1,2,3,4,5];

const includesThree = nums.includes(3);
console.log(includesThree); //True

const includesTen = nums.includes(10);
console.log(includesTen); //False