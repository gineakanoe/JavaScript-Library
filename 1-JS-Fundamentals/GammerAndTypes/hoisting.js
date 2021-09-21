/*
    -JS is read top to bottom, line by line
    -before the code is executed, there is a first pass made by the compiler - which is where hoisting is performed
    -the first pass of the code is essentially looking at anything on the left side of the assignment operators and storing those declared variables
    -the second pass, or the execution phase, is actually when the values we have given our variables are assigned
*/
 let myName = 'Isaiah';
 console.log(myName);

 hoisted();

 function hoisted(){
     console.log("I have been hoisted");
 }

 let hoistTwo = () => {     
     console.log("Can I hoist? Nah")
 }
 hoistTwo();