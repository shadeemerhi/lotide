const countOnly = function(allItems, itemsToCount) {

  let counted = {};
  for (let item of allItems) {
    if (itemsToCount.hasOwnProperty(item)) {
      if (itemsToCount[item]) {
        if (counted.hasOwnProperty(item)) {
          counted[item]++;
        } else {
          counted[item] = 1;
        }
      }
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


// TESTING
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
let countObject = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

const result1 = countOnly(firstNames, countObject);
console.log(result1);

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);