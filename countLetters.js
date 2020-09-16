const countLetters = function(str) {

  let counted = {};
  str = str.toLowerCase().split(' ').join('');
  for (let char of str) {
    if (counted.hasOwnProperty(char)) {
      counted[char]++;
    } else {
      counted[char] = 1;
    }
  }
  return counted;
}

console.log(countLetters('lighthouse in the house'));