// --toString()--

let x = 123
// console.log(typeof x.toString())

// --toExponential()--

let num = 9.656;
num.toExponential(2);

// console.log(num)

// --toFixed()--

let num2 = 9.656;
// console.log(num2.toFixed(0)) // == 10

// --toPrecision()--

let num3 = 9.656;
// console.log(num3.toPrecision(3)) // == 9.66

// --valueOf()--

let num4 = 123 + 2323894728397489;
// console.log(num4.valueOf()) // == 2323894728397612

// --Number()--

let date = Number(new Date())
// console.log(date)

// --parseInt() and parseFloat()--

// console.log(parseInt("14 years old am i")) // == 14
// console.log(parseFloat("14.5 years old am i")) // == 14.5