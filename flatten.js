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
}


console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([1, 2, [3, [2,[1,2,3,4,5,6,7],4]], 5, [6]]));

module.exports = flatten;