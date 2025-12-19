const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // nested array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // merges two arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // ... is spread operator used to spread elements of array and [] is used to create new array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flattens the array to single level, Infinity is used to flatten all levels of nested arrays
// console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // isArray method to check if variable is array or not
console.log(Array.isArray(["Hitesh"])) // true
console.log(Array.from("Hitesh")) // converts string to array of characters
console.log(Array.from({name: "hitesh"})) // interesting // converts object to array, each property becomes an element in array with value as undefined

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));