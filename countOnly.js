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

module.exports = countOnly;