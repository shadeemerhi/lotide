const countLetters = function(str) {

  let counted = {};
  str = str.toLowerCase().split(' ').join('');
  for (let char of str) {
    if (counted.hasOwnProperty(char)) {
      counted[char]++;
    } else {
      counted[char] = 1;
    }
  }
  return counted;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(countLetters('lighthouse in the house'));