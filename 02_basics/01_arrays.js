// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // adds element at the end
// myArr.push(7) 
// myArr.pop() // removes element from the end

// myArr.unshift(9) // adds element at the beginning
// myArr.shift() // removes element from the beginning

// console.log(myArr.includes(9)); // true or false
// console.log(myArr.indexOf(3)); // returns index of element or -1 if not found

// reverse
// myArr.reverse()
// console.log(myArr);

// const newArr = myArr.join() // converts array to string with , separator
// const newArr = myArr.join(" - ") // converts array to string with custom separator

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // does not modify original array, returns a new array from start index to end index (not included)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // modifies original array, removes elements from start index, number of elements to remove
console.log("C ", myArr);
console.log(myn2);