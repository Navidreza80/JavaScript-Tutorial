// --size--

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// console.log(fruits.size) // result == 3

// --delete()--

fruits.delete("apples");

// --clear()--

fruits.clear();

// Maps also have forEach, values, keys and entries methods
// see sets_methods.js

// --Map.groupBy()--

// Create an Array
const newFruits = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 500 },
  { name: "oranges", quantity: 200 },
  { name: "kiwi", quantity: 150 },
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Map.groupB(newFruits, myCallback);

console.log(result)
