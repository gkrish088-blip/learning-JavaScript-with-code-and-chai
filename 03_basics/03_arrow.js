const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // 'this' refers to the object that is calling the method
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // in nodejs it refers to empty object but in browser it refers to window object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // undefined because 'this' here refers to global object which doesnt have username property
// }

// chai() //

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // undefined because 'this' here refers to global object which doesnt have username property
// }

const chai =  () => { // arrow function doesnt have its own 'this' it takes 'this' from its surrounding context
    let username = "hitesh"
    console.log(this); // in nodejs it refers to empty object but in browser it refers to window object
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return must be  a single expression

// const addTwo = (num1, num2) => ( num1 + num2 ) // using parentheses to return object literal

const addTwo = (num1, num2) => ({username: "hitesh"}) // returning object literal


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() 