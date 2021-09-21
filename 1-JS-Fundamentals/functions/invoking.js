function hi() {
    console.log('HI');
}

hi; //will not run function
hi(); //using parenthesis tells console to run the function
hi();
hi();

//Must use () to properly invoke (or run) the function

//* Challenge: Create a function that, when invoked, lists out the numbers 1-10

function num() {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
}

num();

//*classmate solutions

function countToTen() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}
countToTen();

function ten(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}
ten();

//*Challenge: create a function that lists out the values individually

function name() {
    let name = 'Ginea';
    for (let i = 0; i < name.length; i++){
        console.log(name[i]);
    }
}
name();

//*Classmate solutions
let arr = ['this', 'is', 'really', 'cool'];         //*missed that this was part of the challenge ':/

function list(){
    for(i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

list();

function hi() {
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
}

hi();

function list(){            //*Didn't get this copied in time...
    
}