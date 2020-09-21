const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (! eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else {
      if (! assertEqual(array1[i], array2[i])) {
        return false;
      }
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;


// TESTING
// console.log(eqArrays([1, 2, [3, 4, [3, [4, 5, [1, 1, [1, [1, 1]]]]]]], [1, 2, [3, 4, [3, [4, 5, [1, 1, [1, [1, 1]]]]]]])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
