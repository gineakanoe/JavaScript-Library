let hi = () => {
    //1     
    return 'hi';    
}
    //2       3
let newName = hi();

console.log(newName);

//1 The keyword that brings our data out of our function
//2 We need a new variable to hold the value of the function
//3 When called, the function becomes the value of the return

let firstName = () => {
    return 'Isaiah'
}


//let myName = firstName();
//console.log(myName);

//* function declaration
function capitalizeName(name){

    //* Creating a new variable to hold the capitalized name
    let capName = '';

    //* Looping over all of the letters in the name varriable
    for(let letter in name){

        //* checking if it's the first letter
        if(letter == 0){

            //* capitalize it and push it into the new variable we made
            capName += name[letter].toUpperCase();
        } else{

            //* lowercase all other letters and push it into the new variable we made
            capName += name[letter].toLowerCase();
        }
    }

    //* console log and return the capName variable
    console.log(capName);
    return capName;
}

let myFirstName = capitalizeName('isaiah');
console.log(myFirstName);
