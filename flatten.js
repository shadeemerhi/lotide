const flatten = function(input) {

  let flattened = [];
  for (let element of input) {
    if (Array.isArray(element)) {
      for (let arrayElement of element) {
        flattened.push(arrayElement);
      }
    } else {
      flattened.push(element);
    }
  }
  return flattened;
}


// RECURSIVE SOLUTION (DOES NOT WORK YET)
// const flatten = function(input) {

//   let flattened = [];
//   for (let element of input) {
//     if (Array.isArray(element)) {
//       flatten(element);
//       for (let arrayElement of element) {
//         if (Array.isArray(arrayElement)) {
//           flatten(arrayElement);
//         }
//         flattened.push(arrayElement);
//       }
//     } else {
//       flattened.push(element);
//     }
//   }
//   return flattened;
// }


console.log(flatten([1, 2, [3, 4], 5, [6]]));
// console.log(flatten([1, 2, [3, [2,3,4]], 5, [6]]));