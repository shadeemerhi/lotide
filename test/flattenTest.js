const chai = require('chai');
const flatten = require('../flatten');
const assert = chai.assert;

describe('#flatten', () => {
  it('should return [1,2,3,4,5,6] for [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
  });

  it('should return [1,2,3,2,1,2,3,4,5,6,7,4,5,6], for [1, 2, [3, [2,[1,2,3,4,5,6,7],4]], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, [2,[1,2,3,4,5,6,7],4]], 5, [6]]), [1,2,3,2,1,2,3,4,5,6,7,4,5,6]);
  });
});