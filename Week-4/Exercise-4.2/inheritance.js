const Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
  this.teach = function(subject) {
      console.log(this.name + " is teaching " + subject);
      console.log(this.name + " is of age " + this.age);
  }
};

const Teacher = new Person();
const him = Teacher;

him.initialize("Adam", 45);
him.teach("Inheritance");