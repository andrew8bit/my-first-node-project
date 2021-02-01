const fs = require('fs');
const moment = require('moment');

let myDate = moment('2021-02-01'); 
let myClone = myDate.clone();

console.log(myClone);
let addOneWeek = myDate.add(1, 'week');
myDate.format();
console.log(myDate.format());

fs.readFile('nfl.txt', 'utf8', function(error, data){
    if (error) {
        console.log('You had a problem reading this file');
    } else {
        console.log(data);
    }
});



// const myModule = require('./myModule');
// const myOtherModule = require('./myOtherModule');
// const myThridModule = require('./myThirdModule')

// console.log('Hello World');

// const hello = (name) => {
//     console.log(`Hello, ${name}`);
// }

// hello('Andrew');
// hello('Archie');

// console.log(myModule.add(2,2));
// console.log(myModule.sub(10,2))
// console.log(myModule.team)

// myModule.team = 'Lakers'
// const team = "Boston"

// console.log(myModule.team)

// // my other module

// myOtherModule.welcomeToNode();

// myThridModule.helloBro();