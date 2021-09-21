//! The join method converts the elements of an array into a string.
//? Can accept an option parameter, "separator", which indicates how the elements will be separated
//? The default separator is a comma

const greetings = ['hi', 'hello', 'welcome', 'howdy'];

console.log(greetings.join());

console.log(greetings.join("! "));