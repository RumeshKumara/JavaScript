const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...numbers)); // 6
