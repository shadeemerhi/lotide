const eqArrays = require('./eqArrays');

const assertEqualArrays = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`💚 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`💔 Assertion Failed: ${array1} !== ${array2}`);
  }
}

module.exports = assertEqualArrays;


// TESTING
// console.log(assertEqualArrays([1, 2, 3], [1, 2, 3]));
// console.log(assertEqualArrays([1, 2, 3], [3, 2, 1]));

// console.log(assertEqualArrays(["1", "2", "3"], ["1", "2", "3"]));
// console.log(assertEqualArrays(["1", "2", "3"], ["1", "2", 3]));