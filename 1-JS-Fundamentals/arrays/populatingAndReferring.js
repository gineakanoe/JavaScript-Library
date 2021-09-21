//? ARRAYS
/*  
-arrays are containers that hold lists of items
-denoted by []

let list = ['item1', 'item2', 'item3'];
 1        2   3

1. name of the array
2. the array is inside of these brackets
3. each item, regardless of datatype, seperated by commas
*/

let list = ['orange', 'banana', 'tomato'];
console.log(list[1]); //banana

/* When we call an array, we can append square brackets onto the end of our array with
the index number we want to reference: this is called square bracket notation */
// JS counts starting at '0'

let students = ['Matt', 'Keisha', 'Zontrae', 'William', 'Jimmy', 23, true, ['Ramsay', 'Reagan', 'Emory']];
console.log(typeof students);  //object
console.log(students[5]); //23
console.log(students[7][1]); //Reagan
