// --Array Iteration--

const numbers = [1, 2, 3, 4, 5];

// --map()--

const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers); // result == [ 2, 4, 6, 8, 10 ]

// --filter()--

const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); // result == [ 2, 4 ]

// --reduce()--

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum) / result == 15

// --reduceRight()--

const reversedSum = numbers.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0);

// --every()--

const allEven = numbers.every((number) => number % 2 === 0); // == false

// --some()--

const hasEven = numbers.some((number) => number % 2 === 0); // == true

// --Array.form()--

const arrayLikeObject = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const arrayFromArrayLikeObject = Array.from(arrayLikeObject);
// console.log(arrayFromArrayLikeObject)

// --keys()--

const object = { a: 1, b: 2, c: 3 };
const keys = Object.keys(object);
// console.log(keys)

// --entries()--

const entries = numbers.entries();
// console.log(entries)

// --with()--

const newNumber = numbers.with(2, 17)
// console.log(newNumber)

// --(...)--

const newNumbers = [...numbers, 17];