// Destructuring Object

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

// Destructuring
let { firstName, lastName: lName } = person;
console.log(firstName + " " + lName); // result == "John Doe"

// Destructuring String

const name = "John Doe";
let [a1, a2] = name;
console.log(a1 + " " + a2); // result == "J o"

// Destructuring Array

const arr = ["John", "Doe", 50];
let [name2, lastName2, age2] = arr;
let { [0]: fName, [1]: lastName } = arr;
let [John, , num] = arr;
console.log(name2 + " " + lastName2 + " " + age2); // result == "John Doe 50"
