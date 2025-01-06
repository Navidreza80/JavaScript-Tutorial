// --Array Search--

// --indexOf()--

let cars = ["Lambo", "BMW", "Saab", "Ferrari"];
// console.log(cars.indexOf("Lambo")); // result == 0

// --lastIndexOf()--

// console.log(cars.lastIndexOf("Saab")); // result == 2

// --includes()--

// console.log(cars.includes("Ferrari")); // result == true

// --find()--

let array1 = [5, 12, 8, 130, 44];
let found = array1.find(element => element > 10);
// console.log(found) // result == 12

// --findIndex()--

let array2 = [5, 12, 8, 130, 44];
let index = array2.findIndex(element => element > 10);
// console.log(index) // result == 1

// --findLast()--

let array3 = [5, 12, 8, 130, 44];
let lastFound = array3.findLast(element => element > 10);
// console.log(lastFound) // result == 44

// --findIndexLast()--

let array4 = [5, 12, 8, 130, 44];
let lastIndex = array4.findLastIndex(element => element > 10);
// console.log(lastIndex) // result == 4