// Create an Object
myNumbers = {};

// --Make it Iterable--
myNumbers[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

let text = "";
for (const num of myNumbers) {
  text += num + "\n";
}

// console.log(text); // result ==
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90

// --Create A Object--

const myNums = {}

// --Make it Iterable--

myNums[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

// Create an Iterator
let iterator = myNums[Symbol.iterator]();

let text2 = "";
while (true) {
  const result = iterator.next();
  if (result.done) break;
  text += result.value + "<br>";
}

console.log(text2)
