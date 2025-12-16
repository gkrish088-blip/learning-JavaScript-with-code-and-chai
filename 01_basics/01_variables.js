const accountId = 1434345;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "New York";
let accountState ;
// accountId = 54321; // This will cause an error because accountId is a constant
accountEmail = "bcd@gmail.com"; // This is valid because accountEmail is declared with let
accountPassword = "67890"; // This is valid because accountPassword is declared with var
accountCity = "Los Angeles"; // This is valid, but it's better to declare variables with let or var

/* you should never use var in modern JavaScript because of the problem of function  and block scope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// console.log is also used to print output to the console
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
// console.log(accountState);
// accounntState will be shown undefined because it has not been assigned a value yet 