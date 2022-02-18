const { assert } = require("chai");
const map = require("../map");

describe("#map", () => {
  const words1 = ["ground", "control", "major", "tom"];
  it("should return [ 'g', 'c', 't', 'm' ] for 'words1, word => word[0]'", () => {
    assert.deepEqual(map(words1, word => word[0]), [ 'g', 'c', 'm', 't' ]);
  });
  
  const words2 = ["light", "house"];
  it("should return [ 'i', 'o' ] for 'words2, word => word[1]'", () => {
    assert.deepEqual(map(words2, word => word[1]), [ 'i', 'o' ]);
  });

});