//! The pop method is very similar to the shift method, except it removes the last element from
//!     an array and returns that removed element
//! This method changes the length of the array also

let things = ['thing one', 'thing two', true, 1000];

console.log(`Before: ${things}`);           //? ${} is interperlation

let firstThing = things.pop();

console.log(`After: ${things}`);

console.log(`Popped item : ${firstThing}`);