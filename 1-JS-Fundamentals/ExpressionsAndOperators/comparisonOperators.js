// Equal to 
// Compares the values of two or more things
'3' == 3;
console.log('3' == 3);              //? JS uses coersion?? to say that the 3 of the string is a number and booleans it

// Strict Equal to
// Compares the values and dataTypes to check if they are equal
console.log(3 === 3);       //True
console.log(3 === '3');     //False - the dataType is not the same even though the value is

// Not Equal to                     //? The '!' is known as the 'Bang Operator'
console.log('3' != 3);      //False
console.log(3 != 3);        //False

// Strict Not Eqaul To
// Compares the dataType and the value to check if they are not equal
'3' !== 4;
console.log('3' !== 4);     //True


// Greater Than
3 > 2;

// Less Than
2 < 3;

// Greater Than or Equal To
// The greater than operator must be used before the equal sign in order to execute correctly.  
3 >= 2;     // Not to be confused with => (fat arrow functions) We will get into that later

// Less Than or Equal To
2 <= 3;

// And                              //? The '&&' are known as ampersands
2 && 3;

// Or                               //? The '||' are known as pipes
2 || 3;

