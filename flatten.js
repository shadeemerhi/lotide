const flatten = function(input) {

  let flattened = [];
  for (let element of input) {
    if (Array.isArray(element)) {
      // Recursion
      const newArray = flatten(element);
      for (let arrayElement of newArray) {
        flattened.push(arrayElement);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

module.exports = flatten;