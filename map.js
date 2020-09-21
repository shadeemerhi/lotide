const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
console.log(map(words, word => word[0]));

module.exports = map;