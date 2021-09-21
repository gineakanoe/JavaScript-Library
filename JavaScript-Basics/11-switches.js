//Switches

//Syntax

    switch(expression) {
        case x:
            // code block
            break;
        case y:
            // code block
             break;
        default:
            // code block
    }

//Switch Examples

let ingredients = "Salmon"

switch (ingredients) {
    case "Ground Beef":
        console.log("I'll make Hamburgers.")
        break;
    case "Salmon":
        console.log("I'll make Grilled Salmon.")
        break;
    case "Chicken":
        console.log("I'll make Chicken Tacos.")
        break;
    default:
        console.log("I guess I should order something")
}

//Example "else if"

let answer = "B";

if (answer === "A" || answer =="B") {
    console.log("Gryffindor")
} else if (answer === "C" || answer ==="D") {
    console.log("Hufflepuff")
} else if (answer === "E" || answer ==="F") {
    console.log("Ravenclaw")
} else if (answer === "G" || answer ==="H") {
    console.log("Slytherin")
} else {
    console.log("Must be a Muggle")
}

//Example "switches"

let answer = "B"

switch (answer) {
    case "A":
    case "B":
        console.log("Gryffindor")
        break;
    case "C":
    case "D":
        console.log("Hufflepuff")
        break;
    case "E":
    case "F":
        console.log("Ravenclaw")
    case "G":
    case "H":
        console.log("Slythering")
        break;
    default:
        console.log("Must be a Muggle.")
}

