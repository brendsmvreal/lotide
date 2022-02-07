const takeUntil = function(array, callback) {
  let sliceArr = [];
  for (const element of array) {
    if (!callback(element)) {
      sliceArr.push(element);
    } else {
      return sliceArr;
    }
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}; 

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) { // Boolean functions do not require the equal operator 
    console.log(`✅ Assertion Passed: ${(actual)} === ${(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${(actual)} !== ${(expected)}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertEqual(results2, ["I've", "been", "to", "Hollywood"]);

console.log('---');

const results3 = takeUntil(data1, x => x > 5)
assertEqual(results3, [1, 2]);