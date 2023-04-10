const assert = require('chai').assert;
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns the 2 of an array", () => {
    assert.deepEqual(result.length, 2);
  });

  it("returns 'Lighthouse' of an array", () => {
    assert.deepEqual(result[0], 'Lighthouse');
  });

  it("returns 'Labs' of an array", () => {
    assert.deepEqual(result[1], 'Labs');
  });
});