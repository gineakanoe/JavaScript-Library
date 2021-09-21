// For of loops used with Arrays

let cats = ['tabby', 'siamese', 'maine coon', 'calica']

for (cat of cats) {
    console.log(cat, 'says meow')
}

let student = {                 //! Doesn't work because objects only work with 'for in loops'
    name: "Finn",
    awesome: true,
    degree: 'Web Dev',
    week: 1
}

for (item of student) {
    console.log(item)
}


