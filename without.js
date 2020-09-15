const without = function(source, itemsToRemove) {

  let newArray = [];
  for (let item of source) {
    if (itemsToRemove.indexOf(item) === -1) {
      newArray.push(item);
    }
  }
  return newArray;
}

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



// TESTING
const words = ["hello", "world", "lighthouse"];
const newThing = without(words, ["lighthouse"]);
assertEqualArrays(words, ["hello", "world", "lighthouse"]);
console.log(newThing);

const numbers = [1, 2, 3];
without(numbers, [1]);
assertEqualArrays(numbers, [1, 2, 3]);

console.log(without(["1", "2", "3"], [1, 2, "3"]));