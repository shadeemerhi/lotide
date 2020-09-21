const tail = require('../tail');
const assertEqualArrays = require('../assertArraysEqual');

const nums = [1,2,3,4,5];
assertEqualArrays(tail(nums), [2, 3, 4, 5]);