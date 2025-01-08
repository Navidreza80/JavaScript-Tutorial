// --Create a Set--
const letters = new Set();

// --Add Values to the Set--
letters.add("a");
letters.add("b");
letters.add("c");

// --List all Elements--

let text = "";
for (const x of letters) {
  text += x;
}

// console.log(text) // result == "abc"
// console.log(typeof letters) // type == object
// console.log(letters instanceof Set) // result == true