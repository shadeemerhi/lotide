const findKey = require("./findKey");

const findKeyByValue = function(searchObj, valueWeWant) {

  let keys = Object.keys(searchObj);
  for (let key of keys) {
    if (searchObj[key] === valueWeWant) {
      return key;
    }
  }
  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "Family Guy"));

module.exports = findKeyByValue;