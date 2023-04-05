const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
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

const without = function (source, itemsToRemove) {
  let newArray = [];
  if(source.length !== itemsToRemove.length) {
    for (let i = 0; i < source.length; i++) {
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] !== itemsToRemove[j]) {
          newArray.push(source[i]);
        }
      }
    }
  } else {
    for(let i = 0; i < source.length; i++) {
      if(source[i] !== itemsToRemove[i]) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"] 

assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"]));