function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
}

// --Object Constructor--

const person = new Person("Navidreza", "Abbaszadeh", 14, "black");
// console.log(person); // result == Person { firstName: 'Navidreza', lastName: 'Abbaszadeh', age: 14, eyeColor: 'black' }

// --Constructor Methods--

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
const student = new Student("Navidreza", "Abbaszadeh");
// console.log(student.fullName()) // result == "Navidreza Abbaszadeh"

// --Adding Methods to Object Created With Constructor--

student.changeFirstName = function (firstName) {
  this.firstName = firstName;
};

student.changeFirstName("Navid");
// console.log(student.fullName()); // result == "Navid Abbaszadeh"

// --Adding Methods to Constructor--

Student.prototype.createCourse = function (title, desc) {
  this.course = {};
  this.course.title = title;
  this.course.description = desc;
};

student.createCourse("JavaScript", "This is JavaScript");
// console.log(student.course); // result == {title: "JavaScript", description: "This is JavaScript"}

// --Built-In JavaScript Constructors--

const object = Object()
const array = new Array();
const map = new Map();
const set = new Set();
const date = new Date();
const regExp = new RegExp();
const func = new Function();