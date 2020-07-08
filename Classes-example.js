class Student {
  constructor(roll, name) {
    this.roll = roll;
    this.name = name;
  }
  makeNoise() {
    console.log(`${this.name} makes noise`);
  }
}

const newStudent = new Student(1, "Pratik");
console.log(
  `${newStudent.name} is a good student and his roll is ${newStudent.roll}`
);
newStudent.makeNoise(this);
