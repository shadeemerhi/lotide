const tail = require('../tail');
const chai = require('chai');
const assert = chai.assert;

describe('#tail', () => {
  it('should return [2, 3, 4, 5] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it('should return [1] for [0, 1]', () => {
    assert.deepEqual(tail([0, 1]), [1]);
  });
});