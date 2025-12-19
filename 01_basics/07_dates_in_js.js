// Dates

let myDate = new Date() // current date and time
// console.log(myDate.toString()); // full date and time // default format 
// console.log(myDate.toDateString()); // only date
// console.log(myDate.toTimeString()); // only time
// console.log(myDate.toLocaleString());m// date and time in local format
// console.log(myDate.toLocaleDateString()); // date in local format
//  console.log(myDate.toLocaleTimeString()); // time in local format
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // year, month (0-11), date
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // year, month (0-11), date, hours, minutes
// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 30) // year, month (0-11), date, hours, minutes, seconds
// let myCreatedDate = new Date(2023, 0, 23, 5, 3, 30, 500) // year, month (0-11), date, hours, minutes, seconds, milliseconds
// let myCreatedDate = new Date("2023-01-14") // yyyy-mm-dd
// let myCreatedDate = new Date("01-14-2023") // mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // timestamp in milliseconds since Jan 1, 1970

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // timestamp in seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // month is zero based index so we add 1
// console.log(newDate.getFullYear());// year in 4 digits
// console.log(newDate.getDate()); // date of month
// console.log(newDate.getDay());// day of week 0-6 (0 is Sunday)

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
}) // returns the weekday in long format like Monday, Tuesday etc.

newDate.toLocaleString('default', {
    month: "long",dateStyle:"long"}); // returns the month in long format like January, February etc.
    