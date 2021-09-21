let officeCharacter = "Pam"

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour");
        break;
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica.");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
};

let dessert = 'carrot';

switch (dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('The cake is a lie!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log('Not on the menu');
};

let num = -40

switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
};