/* Scope is how a computer keeps track of all the variables in a program
    - Scopes can be nested (think Global and Local, like Earth and Indiana) 
*/

let x = 12;

function scope(){
    let x = 33;
    console.log(x);
}
scope();        //33
console.log(x); //12

let y = 12; 

function scopeTwo(){
    y = 33;                 //? We did not define this 'y' as a new variable, so it is console logged as an updated global variable
    console.log(y);
}
scopeTwo();     //33
console.log(y); //33

//var, let, const

//const (constant) cannot be re-expressed, or reassigned a value

//var and let operate mostly the same way. But var is scoped to the nearest function black, 
//and let is scoped to the nearest enclosing block

//? VAR
var a = 12;

function varTest(){
    var a = 33;
    if(1 == 1){
        var a = 45;
    }
    console.log(a);
}
varTest();
console.log(a);

//? LET

let b = 12;

function letTest(){
    var b = 33;
    if(true){
        let b = 45;
        console.log(b);
    }
    console.log(b);
};
letTest();
console.log(b);