// ES6: Destructuring Objects
const address = {
  firstName: "Pratik",
  lastName: "Sah",
  email: "pratiksah@hotmail.com",
  city: "Purnia",
  state: "Bihar",
  pin: 854326,
};

// destructuring and renaming
const { firstName: fn, lastName: ln } = address;

// I have to get my fname and the last name
console.log(fn, ln);
