const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

const assertArraysEqual = function (assert) {
  if (assert) {
    console.log(`👍👍👍${assert}`);
  } else {
    console.log(`😒😒😒${assert}`);
  }
}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);