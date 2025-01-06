// --Array Sorting--

// --sort()--

const fruits = ["Banana", "Orange", "Apple", "Mango"]
sortedFruits = fruits.sort()
// console.log(sortedFruits)

// reverse()--

const numbers = [1, 2, 3, 4, 5]
numbers.reverse()
// console.log(numbers)

// --toSorted()--

const mixedArray = [1, "banana", 3, "orange", 2, "apple"]
const sortedArray = mixedArray.toSorted()
// console.log(sortedArray)

// --toReversed()--

const reversedArray = mixedArray.toReversed()
// console.log(reversedArray)

// --Math.min.apply()--

const min = Math.min.apply(null, [1, 2, 3, 4, 5])
// console.log(min) // == 1

// --Math.max.apply()--

const max = Math.max.apply(null, [1, 2, 3, 4, 5])
// console.log(max) // == 5