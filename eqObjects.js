const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (! object2.hasOwnProperty(key)) {
      return false;
    }

    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      // Recursive solution
      if (! eqObjects(object1[key], object2[key])) {
        return false;
      };
    }
    else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
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


// NON-NESTED OBJECT TEST CASES

console.log('-----NON-NESTED OBJECT TEST CASES-----');
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { d: ["2", 3, 4], c: "1", };
const dc = { c: "1", d: 5};
console.log(eqObjects(cd, dc)); // => false

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => true

console.log();
console.log('-----TESTED OBJECT TEST CASES-----');

// NESTED OBJECTS TEST CASES
console.log(eqObjects({ a: { z: 1 }, b: { f: { e: 'hi'} } }, { a: { z: 1 }, b: { f: { e: 'hi'} } })); // => true
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: { f: { e: 'hi'} } })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log();