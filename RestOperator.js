// ES6: Rest operator

let addNumber = (...args) => {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
};

const res = addNumber(1, 2, 5, 5, 23, 43, 45);
console.log(res);
