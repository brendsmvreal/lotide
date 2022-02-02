const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i] && arr1.length === arr2.length) {
      return true;
    }
  }
  return false;
};
const assertArraysEqual = function(arr1, arr2) {
  // 1) make  sure item 1 and 2 are even comparable (object type, size etc.)
  if (arr1.length !== arr2.length) {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    // 2) loop through the elements in the items and if we find a diff, return/print that the objects are not the same and exit the loop.
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
      return;
    }
  }
  console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  return;
};
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) { 
      newArray.push(source[i]);
    }
  }
  return newArray;
};
assertEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true);
console.log(without([1, 2, 3], [1]));
console.log(without(['1', '2', '3'], [1, 2, '3']));
