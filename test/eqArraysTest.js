const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true for [1, 2, [3, 4, [3, [4, 5, [1, 1, [1, [1, 1]]]]]]], [1, 2, [3, 4, [3, [4, 5, [1, 1, [1, [1, 1]]]]]]]', () => {
    assert.equal(eqArrays([1, 2, [3, 4, [3, [4, 5, [1, 1, [1, [1, 1]]]]]]], [1, 2, [3, 4, [3, [4, 5, [1, 1, [1, [1, 1]]]]]]]), true);
  });

  it('should return false for [1, 2, 3], [3, 2, 1]', () => {
    assert.equal(eqArrays([1,2,3], [3,2,1]), false);
  });

  it('should return true for ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
});