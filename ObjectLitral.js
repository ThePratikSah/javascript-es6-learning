// ES6: Object literal
function usernameGenerator(fname, lname, age) {
  const username = {
    firstname: fname,
    lastname: lname,
    age: age,
  };

  // Object creation
  const user = { fname, lname, age };

  console.log(username);
  console.log(user);
}

usernameGenerator("Pratik", "Sah", "21");
// Output: { firstname: 'Pratik', lastname: 'Sah', age: '21' }
// Output: { fname: 'Pratik', lname: 'Sah', age: '21' }
