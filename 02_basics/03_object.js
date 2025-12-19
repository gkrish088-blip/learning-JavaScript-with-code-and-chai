// singleton
// Object.create // creates a singleton object

// object literals

const mySym = Symbol("key1") // symbol is a unique and immutable data type


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // [ ] to use variable as key othrerwise it will be treated as string
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // dot notation to access object properties good but not for special characters or variables as keys
// console.log(JsUser["email"]) // bracket notation to access object properties good for special characters or variables as keys
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // accessing symbol key

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // freezes the object, no changes allowed
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){  // method inside object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());