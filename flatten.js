const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
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

const flatten = function(array) {
  let flattenedArray = []; 
  for (let i = 0; i < array.length; i++) {
    const currentArray = array[i];
    if (!Array.isArray(currentArray)){
      flattenedArray.push(currentArray);
      continue;
    }
    for (let j = 0; j < currentArray.length; j++) {
      flattenedArray.push(currentArray[j]);
    }
  }
  return flattenedArray;
}

const oldNumbersArr = [1, 2, [3, 4], 5, [6]];
const newNumberArr = flatten(oldNumbersArr);
assertArraysEqual(newNumberArr, [1, 2, 3, 4, 5, 6]);
