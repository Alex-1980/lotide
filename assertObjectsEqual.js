const eqObjects = function (object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let item of array1) {
      if(Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        if(!eqArrays(object1[item], object2[item])) {
          console.log("eqStatus", eqArrays(object1[item], object2[item]))
          return false;
        }
      } else if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😒😒😒 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};