const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!object2.hasOwnProperty(key)) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (! eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
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

const assertObjectsEqual = function(object1, object2) {

  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`💚 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`💔 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
}


// TESTING CASES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { d: ["2", 3, 4], c: "1", f: 5};
const dc = { c: "1", f: 5, d: ["2", 3, 4]};
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false