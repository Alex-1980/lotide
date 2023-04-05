const assertArraysEqual = function (assert) {
  if (assert) {
    console.log(`👍👍👍${assert}`);
  } else {
    console.log(`😒😒😒${assert}`);
  }
}

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

const flatten = function(array) {
  let newArray = [];
  for(let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      for(let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j])
      }
    } else {
      newArray.push(array[i])
    }
  }
  console.log(newArray);
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]