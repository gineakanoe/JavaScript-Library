// For in loops used with objects

let student = {
    name: "Finn",
    awesome: true,
    degree: 'Web Dev',
    week: 1
}

for (item in student) {                         //? Runs in seperate line
    console.log(item)
    console.log(student[item])
}

let character = {
    name: 'Link',
    hearts: 3,
    favColor: 'Green',
    isZelda: false
}

for (thing in character) {                          //? Runs in same line
    console.log(`${thing}: ${character[thing]}`)
}
