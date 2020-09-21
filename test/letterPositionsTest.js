const chai = require('chai');
const letterPositions = require('../letterPositions');
const assert = chai.assert;

describe('#letterPositions', () => {
  it('should return { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for hello', () => {
    assert.deepEqual(letterPositions('hello'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });
});