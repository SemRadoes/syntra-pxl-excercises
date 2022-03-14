const student = {
    firstName: "John",
    lastName: "Duck",
    age: 30,
    greeting: function () {
      return `Hello, my name is ${this.firstName} ${this.lastName}!`;
    },
  };
  
  const student2 = {
    firstName: "Donald",
    lastName: "Duck",
    age: 19,
    greeting: function () {
      return `Hello, my name is ${this.firstName} ${this.lastName}!`;
    },
  };
  
  const student3 = {
    firstName: "Mickey",
    lastName: "Mouse",
    age: 18,
    greeting: function () {
      return `Hello, my name is ${this.firstName} ${this.lastName}!`;
    },
  };
  
  const student4 = {
    firstName: "Barry",
    lastName: "Allen",
    age: 20,
    greeting: function () {
      return `Hello, my name is ${this.firstName} ${this.lastName}!`;
    },
  };
  
  const students = [student, student2, student3, student4];
  
  const printStudentInformation = () => {
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      console.log(student.greeting());
    }


  };
  
  printStudentInformation();

  class Student{
    firstname;
    lastName;
    age;
    greeting;

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.greeting = `Hello my name is ${this.firstName} ${this.lastName}!`;
    }
  }

  John_duck = new Student("John", "Duck", 30);
  Donald_Duck = new Student("Donald", "Duck", 19);
  Mickey_Mouse = new Student("Mickey", "Mouse", 18);
  Barry_Allen = new Student("Barry", "Allen", 20);

  console.log(John_duck.greeting);
  console.log(Donald_Duck.greeting);
  console.log(Mickey_Mouse.greeting);
  console.log(Barry_Allen.greeting);