//Loopds

//Syntax

for ([initialExpression]; [conditionExpression]; [incrementExpression]){
    //For loop body (code to be executed)
}

//Loop Examples

//ineffficient
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log(100);

//For Loop
for (let i = 1; i <= 100; 1++){
    console.log(i);
}

//Practice

//Loop from 0 to 50 by 5s.
for(let i = 0; i <= 50; i +=5){
    console.log(i);
}

//Loop from 20 to 1 by -1s.
for (let i = 20; i >= 1; 1--){
    console.log(i);
}

//Loop starting at 3, and increments by 5, but doesn't go over 30
for(let i = 3; i <= 30; i += 5){
    console.log(i)
}

//More Practice

//Count to 200 by 25s. Start at 25.


//Count to 10 by 2s. Start at 6.


//Count to 10 by 5s. Start at 100.



function sayNumber(num){
    console.log(num)
};
for(let i = 0; i < 25; i++){
    sayNumber(i);
};