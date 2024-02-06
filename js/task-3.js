`use strict`;
const filterArray = (numbers, value) => {
  let numberResult = [];
  for (const number of numbers) {
    if (number > value) numberResult.push(number);
  }
  return numberResult;
};
console.log('task-3');
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
