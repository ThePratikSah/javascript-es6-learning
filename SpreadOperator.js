// ES6: Spread operator

const array = [1, 2, 3, 4, 5];

const newArray = array;

newArray.push(6);
console.log(array);
// Output: [ 1, 2, 3, 4, 5, 6 ]

const anotherArray = [...array];
anotherArray.push(7);
console.log(array);
// Output: [ 1, 2, 3, 4, 5, 6 ]

console.log(anotherArray);
// Output: [ 1, 2, 3, 4, 5, 6, 7 ]
