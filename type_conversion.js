// --Number()--

let num1 = Number('123'); // == 123
let num2 = Number('123.45'); // == 123.45
let num3 = Number('abc'); // == NaN

// --parseInt()--

let num4 = parseInt('123abc'); // == 123
let num5 = parseInt('123.45abc'); // == 123

// --parseFloat()--

let num6 = parseFloat('123abc'); // == 123.0
let num7 = parseFloat('123.45abc'); // == 123.45

// --String()--

let num8 = String(123); // == "123"
let num9 = String(123.45); // == "123.45"

// --toString()--

let num10 = (123).toString(); // == "123"
let num11 = (123.45).toString(); // == "123.45"

// --getTime()--

let d = new Date('2022-01-01');
let num12 = d.getTime(); // == 1640995200000

