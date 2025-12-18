const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // shows number of digits after decimal point

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //shows 4 digits starting from left including before and after decimal point

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
console.log(hundreds.toLocaleString()); // default is en-US => 1,000,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0 to 0.9999999
console.log((Math.random()*10) + 1); // we add one so that zero is not includedand range becomes 1 to 10.9999999
console.log(Math.floor(Math.random()*10) + 1); // 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //this is an important formla to generate random numbers in a range including min and max