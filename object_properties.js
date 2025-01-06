const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// --Accessing to property--

// let age = person.age // result == 30
// let age = person['age'] // result == 30
let x = "age"; // result == 30
let age = person[x]; // result == 30

// --Adding New Property--

person.address = {
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
};

// --Deleting Property--

// delete person.address;
// delete person["address"];
// console.log(person.address) // result == undefined

// --Nested Objects--

const student = {
  firstName: "john",
  lastName: "doe",
  age: 18,
  grade: "A",
  course: {
    title: "JavaScript",
    description:
      "JavaScript is very good programming language to learn for beginners",
    courseCapacity: 100,
    status: {
      isActive: true,
      isOnline: true,
    },
  },
};

// --Accessing Nested Objects--

// let courseStatus = student.course.status.isActive ? "active" : "not active";
let courseStatus = student["course"]["status"]["isActive"] ? "active" : "not active";
// console.log(courseStatus) // result == active