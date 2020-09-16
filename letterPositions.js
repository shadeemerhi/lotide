const letterPositions = function(str) {

  let positions = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }
    if (positions.hasOwnProperty(str[i])) {
      positions[str[i]].push(i);
    } else {
      positions[str[i]] = [i];
    }
  }
  return positions;
}

console.log(letterPositions('lighthouse in the house'));