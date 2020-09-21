const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true for ab = { a: "1", b: "2" }, ba = { b: "2", a: "1" }', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba));
  });

  it("should return true for { a: { z: 1 }, b: { f: { e: 'hi'} } }, { a: { z: 1 }, b: { f: { e: 'hi'} } }", () => {
    const obj1 = { a: { z: 1 }, b: { f: { e: 'hi'} } };
    const obj2 = { a: { z: 1 }, b: { f: { e: 'hi'} } };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it('should return false for { a: "1", b: "2"}, { a: "1", b: "2", c: "3" }', () => {
    const ab = { a: "1", b: "2"};
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObjects(ab, abc));
  });
});