// --for--

let text;
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}
// console.log(text) // result ==
// The number is 1
// The number is 2
// The number is 3
// The number is 4

// --for in--

// The JavaScript for in statement loops through the properties of an Object:

let person = { name: "John", age: 30, city: "New York" };
let text2 = "";
for (let key in person) {
  text2 += key + " = " + person[key] + "\n";
}
// console.log(text2)
// name = John
// age = 30
// city = New York

// --for of--

const cars = ["BMW", "Volvo", "Mini"];

let text3 = "";
for (let x of cars) {
  text3 += x + ", ";
}

// console.log(text3); // result == "BMW, Volvo, Mini, "

let language = "JavaScript";

let text4 = "";
for (let x of language) {
  text4 += x + "_";
}

// console.log(text4.slice(0, -1)) // result == "J_a_v_a_S_c_r_i_p_t"

// --While--

while (i < 10) {
  text += "The number is " + i;
  i++;
}

// console.log(text); // result == "The number is 1The number is 2The number is 3The number is 4The number is 5The number is 6The number is 7The number is 8The number is 9The number is 10"

// ===

do {
  text += "The number is " + i;
  i++;
} while (i < 10);

// --break--

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}

// In the example above, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

