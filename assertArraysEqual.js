const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let index = 0;
  while (index < array1.length) {
    if (!assertEqual(array1[index], array2[index])) {
      return false;
    }
    index++;
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

const assertEqualArrays = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`💚 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`💔 Assertion Failed: ${array1} !== ${array2}`);
  }
}


console.log(assertEqualArrays([1, 2, 3], [1, 2, 3]));
console.log(assertEqualArrays([1, 2, 3], [3, 2, 1]));

console.log(assertEqualArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertEqualArrays(["1", "2", "3"], ["1", "2", 3]));