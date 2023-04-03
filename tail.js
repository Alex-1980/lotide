const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😒😒😒Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(arr) {
  let tails = arr.slice(1);
  return tails;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);