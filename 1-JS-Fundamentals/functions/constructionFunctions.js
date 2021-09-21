let person1 = {
    name: 'Trevor',
    age: 24,
    canVote: true
};

let person2 = {
    name: 'Sally',
    age: 19,
    canVote: true
};

let person3 = {
    name: 'Ash',
    age: 8,
    canVote: false
};

//1         2       3
function Person(name, age, canVote){
    //4    5    6
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
console.log(typeof Person);

            //7     8
let person4 = new Person('James', 520, true);
console.log(person4);

/*
    1 => The function keyword
    2 => The function name. For constructor functions, the name should be capitalized
    3 => The parameters. These will be the values of the object once the function is in use
    4 => The 'this' keyword. 'this' gives us the ability to refer back to whatever called or activated it.
    5 => This will be the key to the new object we will create
    6 => This is referring to the parameter we pass through our constructor
    7 & 8 => The 'new' keyword is calling our Person function, creating a new instance of Person with the 
             values we pass in, then storing it in a new variable
*/
