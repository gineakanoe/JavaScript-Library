//! The splice method changes the contents of an array by removing or replacing existing
//!     elements and/or adding new elements in it's place

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb'),
// This will put Feb at index 1(the second position) of the array
console.log(months);

months.splice(4, 1, 'May');
// This will remove the last element and replace it with 'May'
console.log(months);

months.splice(5, 0, "June", "July", "Aug");
console.log(months);