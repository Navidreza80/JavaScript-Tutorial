// --Boolean--

// --Check If Something Is True Or Not--

let bool = Boolean(10 > 9);
// console.log(bool); // result == true
// console.log(10 > 9); // result == true

let x = 0;
Boolean(x); // result == false

let y = -0;
Boolean(y); // result == false

let z = "";
Boolean(z); // result == false

let o;
Boolean(o); // result == false

let b = null;
Boolean(b); // result == false

let n = false;
Boolean(n); // result == false

let j = 10 / "Hallo";
Boolean(j); // result == false
