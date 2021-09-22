/*
!-try/catch/throw/finally statement handles some or all of the errors that may 
!    occur in a block of code, while still running code.
?-The 'try' statement holds the code to be tested.
?-Normally when an error occurs, JS will stop and generate an error message.  
?    But the 'throw' statement allows you to generate custom errors.
?    It can be a string, number, boolean, or an object.
?-The 'catch' statement holds the code that you want to execute when
?    an error occurs in the try statement.
?-The 'finally' statement will hold the code you want to execute after
?    the try and catch, regardless of the result.

* The 'catch' and 'finally' statements are both optional, but you need
*   to use at least one, if not both, while using the try statement.
*/

// try{
//     //Code to execute

//     throw //custom error, if it occurs
// } catch(error){
//     //Code to execute if an exception/error is thrown in the catch
// } finally{
//     //Code to execut last, no matter what
// }

const tryCatchTest = () => {
    try{
        console.log("this is the try statement");
        throw "this is an error we're throwing";
    } catch(error){
        console.log("this is the catch statement:", error);
    } finally{
        console.log("this is the finally statement. it will always run");
    }
}

//tryCatchTest();

const isItOdd = (number) => {
    try{
        if(number == ''){
            throw "this is empty...";
        } else if(isNaN(number)){
            throw "this is not a number";
        } else if(number % 2 == 0){
            throw "this number is even";
        } else {
            console.log("the number is odd!");
        }
    } catch(error){
        console.log("Error: ", error);
    }
};

isItOdd(1);