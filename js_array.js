// --Creating An Array--

const cars = ["Volvo", "BMW", "Saab"]
cars[3] = "Ferrari"
const newCars = new Array("Dogde")
// console.log(cars) // result == [ 'Volvo', 'BMW', 'Saab', 'Ferrari' ]

// --Accessing Array--

let car = cars[0]
// console.log(car) // result == 'Volvo'

//  --Changing Array Elements--

cars[0] = "Lambo"
// console.log(cars[0]) // result == ""Lambo"

// --Array to String--

// console.log(cars.toString()) // result == "Lambo,BMW,Saab,Ferrari"

// --Array Type--

// console.log(typeof cars) // result == "object"

// --Array Length--

// console.log(cars.length) // result == 4

// --Looping Array Elements--

for (let i = 0; i < cars.length; i++) {
  // console.log(cars[i])
}

// --forEach()--

cars.forEach(function (car) {
//   console.log(car)
})

// --push()--

cars.push("Toyota")

// --Adding Elements to an Array Using .length--

cars[cars.length] = "Bugatti"

// --Type of Array--

Array.isArray(cars); // == true
typeof cars // == object

// --instanceof--

console.log(cars instanceof Array) // == true

// --Nested Arrays and Objects--

let nestedArray = [
  "Volvo",
  { model: "BMW", year: 2020 },
  [
    "Saab",
    { model: "Toyota", year: 2015 },
    [
      "Ferrari",
      { model: "Bugatti", year: 2018 },
    ],
  ],
];