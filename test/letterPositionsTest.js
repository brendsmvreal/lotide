const { assert } = require("chai");
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return [9, 15, 21] for e in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").e, [9, 15, 21]);
  });
  
  it("should return [0] for l in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").l, [0]);
  });
  
  it("should return [3, 5, 14, 17] for h in 'lighthouse in the house'", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 14, 17]);
  });

});

