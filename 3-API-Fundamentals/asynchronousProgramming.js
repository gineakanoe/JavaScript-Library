let a= 1;
let b= 2;

setTimeout(function() {
    console.log('Async');
}, 3000);

console.log('Synchronus');
console.log(a);
console.log(b);