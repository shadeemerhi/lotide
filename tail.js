const assertEqual = function(actual, expected) {

  let index = 0;
  while(index < actual.length) {
    if (actual[index] !== expected[index]) {
      return `💔 Assertion Failed: ${actual} !== ${expected}`;
    }
    index++;
  }
  return `💚 Assertion Passed: ${actual} === ${expected}`
};

const tail = function(array) {
  return array.splice(1);
};


// TEST CASES
const nums = [1,2,3,4,5];
const result = tail(nums);
const correctResult = [2,3,4,5];
console.log(assertEqual(result, correctResult));