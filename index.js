const myModule = require('./myModule');
const myOtherModule = require('./myOtherModule');
const myThridModule = require('./myThirdModule')

console.log('Hello World');

const hello = (name) => {
    console.log(`Hello, ${name}`);
}

hello('Andrew');
hello('Archie');

console.log(myModule.add(2,2));
console.log(myModule.sub(10,2))
console.log(myModule.team)

myModule.team = 'Lakers'
const team = "Boston"

console.log(myModule.team)

// my other module

myOtherModule.welcomeToNode();

myThridModule.helloBro();