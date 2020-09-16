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

const middle = function(array) {
  if (checkIfNoMiddle(array)) {
    return [];
  }

  if (checkIfEven(array)) {
    let highMiddle = array.length/2;
    return [array[highMiddle-1], array[highMiddle]];
  }

  let middle = Math.floor(array.length/2);
  return[array[middle]];
}

const checkIfNoMiddle = function(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return true;
  }
  return false;
}

const checkIfEven = function(array) {
  return array.length % 2 === 0;
}



// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

