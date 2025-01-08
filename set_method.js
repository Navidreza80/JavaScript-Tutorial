// --has()--

// Create a Set
const letters = new Set(["a","b","c"]);

// Does the Set contain "d"?
answer = letters.has("d"); // result == false

// --forEach()--

// Create a Set
const letters2 = new Set(["a","b","c"]);

// List all entries
let text = "";
letters2.forEach (function(value) {
  text += value;
})

// --values()--

// Create a Set
const letters3 = new Set(["a","b","c"]);

// Get all Values
const myIterator = letters3.values();

// List all Values
let text2 = "";
for (const entry of myIterator) {
  text2 += entry;
}

// --keys()--

let myIterator2 = letters3.keys();

// List all Elements
let text3 = "";
for (const x of myIterator2) {
  text3 += x;
}

// console.log(text3) // result == "abc"

// Create a Set
const newLetters = new Set(["a","b","c"]);

// Get all Entries
const newIterator = newLetters.entries();

// List all Entries
let newText = "";
for (const entry of newIterator) {
    newText += entry + "\n";
}

// console.log(newText) // result == 
// a,a
// b,b
// c,c