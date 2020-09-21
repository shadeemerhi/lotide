const findKeyByValue = require('../findKeyByValue');

const assert = require('chai'). assert;

describe('#findKeyByValue', () => {
  it("should return drama for {sci-fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}, The Wire", () => {
    assert.equal(findKeyByValue('The Wire', 'drama'));
  });

  it('should return undefined for same object as above but with Family Guy', () => {
    assert.equal(findKeyByValue('Family Guy', undefined));
  });
});

