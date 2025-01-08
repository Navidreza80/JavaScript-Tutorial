// --Create a Map--

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// You can add elements to a Map with the set() method:

// --set()--

fruits.set("peach", 900);

// --Change The Value--

fruits.set("peach", 200);

// --get()--

fruits.get("apples"); // == 500

typeof fruits; // == object
fruits instanceof Map; // == true