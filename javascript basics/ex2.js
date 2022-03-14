class Student {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName}!`;
    }
  }
  
  const student = new Student("John", "Duck", 30);
  const student2 = new Student("Donald", "Duck", 19);
  const student3 = new Student("Mickey", "Mouse", 18);
  const student4 = new Student("Barry", "Allen", 20);
  
  const students = [student, student2, student3, student4];
  students.push(new Student("Sem", "Radoes", 30));
  
  const printStudentInformation = students.forEach(student => { 
    console.log(`Hello, my name is ${student.firstName} ${student.lastName}!`)
});
  
  
