let voteable = age < 18 ? "Too young" : "Old enough";

// The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.

let name = null;
let text = "missing";
let result = name ?? text;

// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
console.log(car?.name) // result == undefined (not Error)