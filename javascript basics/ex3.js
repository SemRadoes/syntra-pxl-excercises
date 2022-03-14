class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
      }
      greeting() {
        return `Hello, my name is ${this.firstName} ${this.lastName}!`;
      }
  }

class Student extends Person {
     
  }

  class Teacher extends Person{
        greeting(){
            return `${super.greeting()} I'm a teacher!`; 
        }
  }

  const teachers = [];
  teachers.push(new Teacher("Bart", "Duisters", 28));
  teachers.push(new Teacher("bla", "bleble", 0));

  
  const students = [];
  students.push(new Student("John", "Duck", 30));
  students.push(new Student("Donald", "Duck", 19));
  students.push(new Student("Mickey", "Mouse", 18));
  students.push(new Student("Barry", "Allen", 20));
  
  const printInformation = (person) => {
    persons.forEach((person) => {
      console.log(person.greeting());
    });
  };
  
  printInformation(students);
  printInformation(teachers);