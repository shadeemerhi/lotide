const middle = function(array) {
  if (checkIfNoMiddle(array)) {
    return [];
  }

  if (checkIfEven(array)) {
    let highMiddle = array.length/2;
    return [array[highMiddle-1], array[highMiddle]];
  }

  let middle = Math.floor(array.length/2);
  return[array[middle]];
}

const checkIfNoMiddle = function(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return true;
  }
  return false;
}

const checkIfEven = function(array) {
  return array.length % 2 === 0;
}

module.exports = middle;