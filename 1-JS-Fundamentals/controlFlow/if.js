let isOn = true;

if (isOn == true) {
    console.log('The light is on!')
}

/* if (condition to be checked) {
    code to be executed if condition is true
}
*/

console.log(isOn == true);          //? True
console.log(isOn == false);         //? False
console.log(isOn);                  //? True

//! As long as variable is defined somewhere, you don't have to define it again.  Example below:
if (isOn) {
    console.log('Yay, the light is on!')
}


let weather = 60;

if (weather < 65) {
    console.log('Wear a jacket')
}
