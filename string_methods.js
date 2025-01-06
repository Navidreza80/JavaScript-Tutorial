// --Extracting String Char--

let text = "HELLO WORLD";
let char = text.charAt(0); // Do Not Support Negative Index
// let char = text.at(0); // Support Negative Index
// let charCode  = text.charCodeAt(0);
// let char = text[0]

// console.log(char); // result == H
// console.log(charCode); // result == 72

// --Extracting String Parts--

let start = 0;
let end = 5;

let substring = text.slice(start, end); // Support Negative Index
// let substring = text.substring(start, end); // Do Not Support Negative Index
// console.log(substring) // result == HELLO

// --Upper Case And Lower Case--

let textToUpperCase = text.toUpperCase();
let textToLowerCase = text.toLowerCase();

// console.log(textToUpperCase); // result == HELLO WORLD
// console.log(textToLowerCase); // result == hello world

// --String Concat--

let string1 = "Hello ";
let string2 = "World!";

let concatenatedString = string1.concat(string2);

// console.log(concatenatedString) // result == Hello World!

// --trim and trimStart and trimEnd--

let leadingAndTrailingSpaces = "   Hello World   ";
let trimmedEndString = leadingAndTrailingSpaces.trimEnd(string1);
let trimmedString = leadingAndTrailingSpaces.trim();
let trimmedStartString = leadingAndTrailingSpaces.trimStart();

// console.log(trimmedString); // result == "Hello World"
// console.log(trimmedStartString); // result == "Hello World   "
// console.log(trimmedEndString); // result == "   Hello World";

// --PadStart and PadEnd--

let number = "5"
let paddedStart = number.padStart(10, " ")
let paddedEnd = paddedStart.padEnd(10, " ")
// console.log(paddedEnd) // result == "          5          "

// --String Repeat--

let repeatedString = string1.repeat(3);
// console.log(repeatedString) // result == "Hello Hello Hello"

// --Replace--

let replacedString = text.replace("WORLD", "Universe");
// console.log(replacedString) // result == "HELLO Universe"
let newText = text.replace(/world/i, "Universe");
let text2 = "Hello Hello World"
let newText2 = text2.replace(/Hello/g, "Bye")
let newText3 = text2.replaceAll("Hello", "Bye")

// console.log(newText) // result == "HELLO Universe"
// console.log(newText3) // result == "Bye Bye World"

// --String To An Array (split)--

let sentence = "Hello World, How are you?"
let words = sentence.split(" ");
let numbersStr = "1, 2, 3, 4, 5"
let numbersArr = numbersStr.split(", ")

// console.log(words) result == [ 'Hello', 'World,', 'How', 'are', 'you?' ]