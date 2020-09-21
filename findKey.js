const findKey = (ourObject, callback) => {

  let keys = Object.keys(ourObject);
  for (let key of keys) {
    if (callback(ourObject[key])){
      return key;
    }
  }
  return undefined;
}

module.exports = findKey;


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

