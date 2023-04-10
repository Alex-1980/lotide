const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for arrays with one or two elements", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for arrays with one or two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for arrays with odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for arrays with odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for arrays with even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for arrays with even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});