typeof "John"; // Returns string
typeof ("John" + "Doe"); // Returns string
typeof 3.14; // Returns number
typeof 33; // Returns number
typeof (33 + 66); // Returns number
typeof true; // Returns boolean
typeof false; // Returns boolean
typeof 1234n; // Returns bigint
typeof Symbol(); // Returns symbol
typeof x; // Returns undefined
typeof null; // Returns object
typeof { name: "John" }; // Returns object
typeof [1, 2, 3, 4]; // Returns object
typeof new Map(); // Returns object
typeof new Set(); // Returns object
typeof function () {}; // Returns function
let myArray = [1, 2, 3, 4];
myArray.constructor === Array;
let myDate = new Date();
myDate.constructor === Date;

typeof "John"; // Returns "string"
typeof ("John" + "Doe"); // Returns "string"
typeof 3.14; // Returns "number"
typeof (33 + 66); // Returns "number"
typeof NaN; // Returns "number"
typeof 1234n; // Returns "bigint"
typeof true; // Returns "boolean"
typeof false; // Returns "boolean"
typeof { name: "John" }; // Returns "object"
typeof [1, 2, 3, 4]; // Returns "object"
typeof {}; // Returns "object"
typeof []; // Returns "object"
typeof new Object(); // Returns "object"
typeof new Array(); // Returns "object"
typeof new Date(); // Returns "object"
typeof new Set(); // Returns "object"
typeof new Map(); // Returns "object"
typeof function () {}; // Returns "function"
typeof x; // Returns "undefined"
typeof null; // Returns "object"

// --void()--

// void avoid DOM default behavior
