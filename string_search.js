// --indexOf() and lastIndexOf()--

let text = "This is a test"
let index = text.indexOf("test")
let lastIndex = text.lastIndexOf("test", 10)
// console.log(lastIndex) // result == 10

// --Search--

let search = text.search("test")
// console.log(search) // result == 10

// --Match--

let match = text.match("est")
let match2 = text.match(/est/gi) // == matchAll()
// console.log(match) // result == [ 'est', index: 11, input: 'This is a test', groups: undefined ]

// --Includes--

let includes = text.includes("test") // also get second params as position
// console.log(includes) // result == true

// --startsWith() and endsWith()--

let startsWith = text.startsWith("This") // true // also get second params as position
let endsWith = text.endsWith("test") // true // also get second params as position

