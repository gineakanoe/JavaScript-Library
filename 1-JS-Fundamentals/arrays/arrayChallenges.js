/*
1- create an array containing movies
2- use .forEach() to list your movies
3- add another movie at the end of the list
4-replace one of your exisiting movies with another
*/

//1
const movies = [
    {name: 'Princess Bride'},
    {name: 'Hunt For Red October'},
    {name: 'The Hobbit'},
    {name: 'What Dreams May Be'}
];

movies.forEach((item) => {
    console.log(item.name)
});

//2
console.log("Before: ", movies);
movies.push({name: 'Pride & Predjudice'});
console.log("After: ", movies);

//3
movies.splice(4, 1, {name: 'Pursuasion'});
console.log(movies);