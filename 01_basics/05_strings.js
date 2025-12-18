const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // template literal / template string

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]); // h
// console.log(gameName.__proto__); // shows all string methods


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // creates a new string from index 0 to 4 (4 not included)
console.log(newString);

const anotherString = gameName.slice(-8, 4) // creates a new string from index -8 to 4 (4 not included)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());// removes spaces from start and end

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))// replaces first occurrence of '%20' with '-'

console.log(url.includes('sundar')) //checks if the substring is present in the string or not, returns boolean

console.log(gameName.split('-')); // splits the string based on the separator and returns an array