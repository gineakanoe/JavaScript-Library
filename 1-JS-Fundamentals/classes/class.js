//* Classes are special functions that allows us to make use of Object-Oriented-Programming (OOP)
//* Classes act as blueprints for creating objects that share properties and methods

//Classes must use the 'class' keyword, and the name must be PascalCased


//! Two cases of making a class in js
//declaration
class Automobile {                      //standard practice: make all your class names capitalized. ex Automobile
    //methods go here
}

//expression
let Vehicle = class {
    //methods go in here                //methods are functions that are stored as an object property; not all functions are methods 
}

//! METHODS
//* Methods are functions that are stored as object properties
//* They let us perform actions inside of classes and then access those actions using dotNotation
//* All methods are functions, but not all functions are methods


//! CONSTRUCTOR METHOD
//* A special methos that helps create and initialize an object created from a class
//* The constructor needs to be included for us to create new objects (or instances) of our class
//* the constructor allows us to set properties as well as pass in values for those properties when creatiing a new instance

class Cookie {
    constructor(type, icing, shape){                       //'Constructor' method helps define the properties the Cookie has //! Any cookie made after this must have a 'type', 'icing', and 'shape'.
        this.t = type;                                      //can do 'this.type = type' if you want to be more concise in you console logs
        this.i = icing;
        this.s = shape;
    }

    //methods go here
}

let chocoChip = new Cookie('chocolate chip', false, 'circle');                               //How we make a new cookie //*icing is boolean in this one

console.log(chocoChip);   //Cookie { t: 'chocolate chip', i: false, s: 'circle' }

//!^^^This is Object Managing^^^!//

console.log(chocoChip.t);  //chocolate chip


/*
class Automobile {
    start:function(){                   //Old process; doesn't work
        //do something
    }
}
*/

class Automobile {
    start(){                            //New Process
        //do something
        console.log("Starting up");
    };

    stop(){
        console.log('Stopping');
    };
}

let newCar = new Automobile();

newCar.start();     //Starting up


//! CHALLENGE

// BRONZE: Build an Automobile class that takes in a make and a model in the constructor. 
//         Bind those two parameters to the class's properties with matching names.

//? SILVER: Add two methods to the Automobile class: start() and stop().  Each method should print
//?         out a message to the console that the engine has started or stopped.  Include the
//?         vehicle's make and model in the output.

//* GOLD: Use the 'new' keyword to create a new instance of the Automobile class and assign the new
//*       instance to a variable.  Run both methods.


class Automobile {
    constructor(make, model){
        this.make = make;
        this.model = model;
    };
    start(){
        console.log(`${this.make} ${this.model} engine has started`);
    };
    stop(){
        console.log(`${this.make} ${this.model} engine has stopped`)
    }
}

let newCar = new Automobile('Chrysler', 200);

newCar.start();     //Chrysler 200 engine has started
newCar.stop();      //Chrysler 200 engine has stopped               //* ^-^ yay!


//* Classmate Solution

class Automobile{
    constructor(type, make, model){
        this.type = type;
        this.make = make;
        this.model = model;
    }
    start(){
        console.log(`starting  ${this.make} ${this.model}`);            //${} pass variables into the console.log
    };
    stop(){
        console.log(`stopping ${this.make} ${this.model}`);
    }
}

let newAutomobile = new Automobile("Car", "Mercury", "Milan");
newAutomobile.start();              //starting  Mercury Milan
newAutomobile.stop();               //stopping Mercury Milan
console.log(newAutomobile.make);    //Mercury


//! EXTENDS
//* The 'extends' keyword is used in class declarations or class expressions to creat a new class
//* as a child of another class(that would be called a subclass)
//? Each new class we create that extends from the parent, inherits the properties and methods
//? of that parent, and can also have it's own properties and methods

class Animal{
    constructor(name){
        this.name = name;
    };

    eat(){
        console.log(`${this.name} eats their food.`);
    };
};

class Dog extends Animal{
    constructor(name, breed){
        super(name);                                                 //'super()' allows us to look up and use all the parent class's methods
        this.breed = breed;                                         //don;t have to do 'this.name = name' because it is already in the parent class
    };

    play(){
        console.log(`${this.name} fetches the ball!`);
    };
};

let Tazer = new Dog('Tazer', 'Chiweenie');
Tazer.eat();                                //Tazer eats their food.        //*is method
console.log(Tazer.breed);                   //Chiweenie                     //*is variable
console.log(Tazer.name);                    //Tazer
//Animal.play();                            //!Does not work.  'play()' is a method of 'Dog'; 'Dog' can do everything 'Animal' can do, but 'Animal' CANNOT do evrything 'Dog' can do

