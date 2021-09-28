//! Making a Cupcake shop

// defining the blueprint of our cupcake
class Cupcake{                                                      //?Defining our cupcake class
    // these will be the propeties of the cupcake                                                               
    constructor(batter, icing, cost){                               //?properties of our cupcake
        this.b = batter;
        this.i = icing;
        this.c = cost;
    };
    // this method is giving us a new description of the cupcake
    getDescription(){
        return `A ${this.b} cupcake with ${this.i} that cost $${this.c}`;           //STRING  //* 'that cost $' we add the second '$' so that '$' shows up in log also
    };
};

// defining our CupcakeShop blueprint
class CupcakeShop{                                                  //?Defining our CupcakeShop class
    // we're only passing in a location when we make a new instance of this class
    constructor(location){                  //!Properties 'inventory' and 'cash' are not in constructor string because we don't want them to inherently be part of each new CupcakeShop.  'Cause each shop will have their own inventory and cash...
        this.l = location;
        // we're giving this class a default of an empty array for inventory, and zero cash
        this.inventory = [];                //'[]' <- empty array
        this.cash = 0;                      //'0' <- they just opened a shop and are now broke, lol
    };

    //this method will tell us how much money the shop has, and how many cupcakes are in the inventory
    getStatus(){
        return `This shop currently has $${this.cash} and ${this.inventory.length} cupcakes!`;  //*tacked on '.length' so getStatus log didn't just have a blank spot where '_ cupcake' is
    }

    //this method will take in four parameters, then creates a new cupcake for the amount we define in the first parameter.
    // then passes the new cupcake into the addToInventory method
    bakeBatch(numberOfCupcakes, batter, icing, pricePerCupcake){            //4 parameters
        for(let i = 0; i< numberOfCupcakes; i++){
            let newCupcake = new Cupcake(batter, icing, pricePerCupcake);   //?add new cupcake with
            this.addToInventory(newCupcake);
        };

    };

    //this method takes in a cupcake, the adds it to the inventory array
    addToInventory(cupcake){
        this.inventory.push(cupcake);                                   //We want to 'push' things into our 'inventory'
    };
    sellCupcakes(){
        // check if the inventory is greater than zero
        if(this.inventory.length > 0){

            // grab the last cupcake from the inventory then store it in a variable
            let cupcakeToSell = this.inventory.pop();                   //use array method 'pop'              <-what is pop?

            // adding the cost of the cupcake to the CupcakeShop cash       //*Oh!  because we sold the cupcake!  So we got the cash of the sell!
            this.cash = this.cash + cupcakeToSell.cost;                 //step in to cupcakeToSell property
            //this.cash += cupcakeToSell.cost                   <--format also works

            return cupcakeToSell;                                           //* Makes sure customer gets the cupcake; it is also out of our inventory.
        } else {
            return 'No cupcakes to sell'
        }
    }
};


let spookyCupcakes = new CupcakeShop('New Orleans');

spookyCupcakes.bakeBatch(10, "red velvet", "cream cheese", 5)
console.log(spookyCupcakes.getStatus());
console.log(spookyCupcakes.inventory);

spookyCupcakes.bakeBatch(7, "pumpkin spice", "vanilla", 10)
console.log(spookyCupcakes.getStatus());
console.log(spookyCupcakes.inventory);

spookyCupcakes.sellCupcakes();
console.log(spookyCupcakes.getStatus());
console.log(spookyCupcakes.inventory);


//let spookyCupcakes = new CupcakeShop('New Orleans');
//console.log(spookyCupcakes.cash);           //0  <- Each new shop will start with cash of 0
//console.log(spookyCupcakes.getStatus());    //This shop currently has $0 and  cupcakes!         //*with '.length' -> This shop currently has $0 and 0 cupcakes!

let newBatch = spookyCupcakes.bakeBatch(10, "red velvet", "cream cheese", 5)


//* Challenge
//Add cupcake to the inventory, then view the contents of the inventory.

//let chocCupcake = new Cupcake('chocolate', 'whipped cream', 5);     //!fail...
//console.log(chocCupcake);


//*Classmate solution


//spookyCupcakes.bakeBatch(10, "red velvet", "cream cheese", 5)
//console.log(spookyCupcakes.getStatus);
//console.log(spookyCupcakes.inventory);











