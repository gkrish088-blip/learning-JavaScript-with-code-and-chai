const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5 because 5 is not null or undefined
// val1 = 0 ?? 10 // 0 because 0 is not null or undefined
// val1 = "" ?? "default string" // "" because "" is not null or undefined
// val1 = null ?? 10 // 10 because null is null
// val1 = undefined ?? 15 // 15 because undefined is undefined
val1 = null ?? 10 ?? 20 // 10 because null is null, so it moves to next value which is 10



console.log(val1);

// Terniary Operator // this is a shortcut for if else

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")