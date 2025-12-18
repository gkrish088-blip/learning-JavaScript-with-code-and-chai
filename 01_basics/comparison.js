// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);// true because "2" is converted to number 2
console.log("02" > 1); // true because "02" is converted to number 2

console.log(null > 0);// false because null is converted to 0 for > operator
console.log(null == 0);// false because null is only equal to undefined
console.log(null >= 0);// true because null is converted to 0 for >= operator

console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);// false

// === 

console.log("2" === 2); // false because different types, and === does not perform type conversion