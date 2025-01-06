// --Math Properties--

mathProps = [
  Math.E, // returns Euler's number
  Math.PI, // returns PI
  Math.SQRT2, // returns the square root of 2
  Math.SQRT1_2, // returns the square root of 1/2
  Math.LN2, // returns the natural logarithm of 2
  Math.LN10, // returns the natural logarithm of 10
  Math.LOG2E, // returns base 2 logarithm of E
  Math.LOG10E, // returns base 10 logarithm of E
];

// console.log(mathProps);

// console.log(Math.round(4.6)) // == 5

// console.log(Math.ceil(4.6)); // == 5

// console.log(Math.floor(4.9)); // == 4

// console.log(Math.trunc(4.9)); // return the integer part // == 4

// console.log(Math.pow(2, 2)) // == 4

// console.log(Math.sqrt(64)) // == 8

// console.log(Math.abs(-4.5)) // == 4.5

// console.log(Math.sin((90 * Math.PI) / 180));

// console.log(Math.cos((0 * Math.PI) / 180));

// console.log(Math.max(1, 2, 3)) // == 3

// console.log(Math.min(1, 2, 3)) // == 1

// console.log(Math.random()) // return random number between 0 and 1

// console.log(Math.log(1));

// Returns a random integer from 0 to 9:

Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:

Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 99:

Math.floor(Math.random() * 100);

// Returns a random integer from 0 to 100:

Math.floor(Math.random() * 101);

// Returns a random integer from 1 to 10:

Math.floor(Math.random() * 10) + 1;

// Returns a random integer from 1 to 100:

Math.floor(Math.random() * 100) + 1;

// This JavaScript function always returns a random number between min (included) and max (excluded):

function getRndIntegerExcluded(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(getRndInteger(0, 10000)) // result == 1 - 9999

// This JavaScript function always returns a random number between min and max (both included):

function getRndIntegerIncluded(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getRndInteger(0, 10000)) // result == 0 - 10000