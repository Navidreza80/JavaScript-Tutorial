const person = {
  name: "John",
  lastName: "Doe",
  age: 30,
  id: 234234,

  // --Adding methods to objects--

  fullName: function () {
    return this.name + " " + this.lastName;
  },
  upperCaseFullname: function () {
    return this.fullName().toUpperCase();
  }
};

// console.log(person.fullName()); // result == "John Doe"
console.log(person.upperCaseFullname()); // result == "JOHN DOE"
