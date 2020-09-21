const chai = require('chai');
const countOnly = require('../countOnly');
const assert = chai.assert;

describe('#countOnly', () => {
  it('should return {Fang: 2, Jason: 1} for first Names = ["Karl", "Salima",' +
  '"Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"]', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    let countObject = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    assert.deepEqual(countOnly(firstNames, countObject), {
      Fang: 2,
      Jason: 1
    });
  });
});