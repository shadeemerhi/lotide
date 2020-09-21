const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, [3, 4, [3, [4, 5, [1, 1, [1, [1, 1]]]]]]], [1, 2, [3, 4, [3, [4, 5, [1, 1, [1, [1, 1]]]]]]])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false