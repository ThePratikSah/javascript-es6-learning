// ES6: Let and const

if (false) {
  var num = 5;
}

console.log(num);
// Output: undefined

if (false) {
  // when using let for creating the variable
  let num2 = 5;
}

console.log(num2);
// Output: Error

// working with const
const num3 = 5;
num3 = 6;
console.log(num3);
// Output: Error

const array = [];
array.push(4);
console.log(array);
// Output: [4]
