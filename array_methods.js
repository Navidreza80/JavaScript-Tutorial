// --Array Methods--

const cars = ["Volvo", "BMW", "Saab"];

// --at()--

let car = cars.at(0); // == "Volvo"

// --pop()--

cars.pop("Toyota");
// console.log(cars) // result == [ 'Volvo', 'BMW' ]

// --unshift()--

cars.unshift("Honda");
// console.log(cars) // result == [ 'Honda', 'Volvo', 'BMW' ]

// --shift()--

cars.shift();
// console.log(cars) // result == [ 'Volvo', 'BMW' ]

// --join()--

let joinedCars = cars.join(", ");
// console.log(joinedCars) // result == "Volvo, BMW"

// --delete()--

delete cars[1];
// console.log(cars) // result == [ 'Volvo', undefined ]

// --concat()--

let newCars = cars.concat(["Ford", "Fiat"]);
// console.log(newCars); // result == [ 'Volvo', <1 empty item>, 'Ford', 'Fiat' ]

// --copyWithin()--

cars.copyWithin(1, 0);
// console.log(cars) // result == [ 'Volvo', 'Volvo' ]

// --flat()--

let nestedArray = [1, [2, [3, 4]], 5];
let flattenedArray = nestedArray.flat().flat();
// console.log(flattenedArray); // result == [ 1, 2, 3, 4, 5 ]

// --flatMap()--

let flattenedArrayWithMap = nestedArray.flatMap((item) =>
  item instanceof Array ? item.flat() : [item]
);
// console.log(flattenedArrayWithMap); // result == [ 1, 2, 3, 4, 5 ]

// --splice()--

cars.splice(1, 0, "Toyota");
// console.log(cars); // result == [ 'Volvo', 'Toyota', 'Volvo' ]

// --toSpliced()--

let splicedArray = cars.toSpliced(1, 0, "Ford", "Fiat");
console.log(splicedArray); // result == [ 'Volvo', 'Ford', 'Fiat', 'Toyota', 'Volvo' ]

// --slice()--

let slicedArray = cars.slice(1);
console.log(slicedArray); // result == [ 'Toyota', 'Volvo']

