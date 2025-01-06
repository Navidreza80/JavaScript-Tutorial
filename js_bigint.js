let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

9007199254740992 === 9007199254740993; // is true !!!

let max = Number.MAX_SAFE_INTEGER; // == 9007199254740991
let min = Number.MIN_SAFE_INTEGER; // == -9007199254740991
Number.isInteger(10);
Number.isSafeInteger(10);
// console.log(Number.isInteger(10.5)) // == false
console.log(Number.isSafeInteger(12345678901234567890))