// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // invoking the function immediately

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // invoking the arrow function immediately with argument
