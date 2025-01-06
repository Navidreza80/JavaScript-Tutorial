const person = {
  name: "John Doe",
  age: 30,
};

// console.log(person) // result == { name: 'John Doe', age: 30 }

// --Display Properties--

let name = person.name;
// console.log(name) // result == 'John Doe'

// --Display Properties In Loop--

let text = "";
for (let i in person) {
  text += person[i] + " ";
}

// console.log(text) // result == 'John Doe 30 '

// implementing Object Vales to an Array

const myArray = Object.values(person);
// console.log(myArray) // result == [ 'John Doe', 30 ]

// --Object.entries--

const fruits = { Bannanas: 200, Apples: 200, Menus: 200, Orange: 200 };

let store = "";
for (let [fruit, value] of Object.entries(fruits)) {
  store += fruit + ": " + value + " ";
}
// console.log(store); // result == Bannanas: 200 Apples: 200 Menus: 200 Orange: 200

// --JSON.stringify()--

let myString = JSON.stringify(person);
// console.log(myString) // result == {"name":"John Doe","age":30}