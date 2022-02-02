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

const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        break;
      }
      if (j == itemsToRemove.length - 1) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
};

// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const numberArr = [1, 2, 3];
const newNumberArr = without(numberArr, [3]);
assertArraysEqual(newNumberArr, [1,2]);

const nameArr = ["paul", "pedro", "paulo"];
const newNameArr = without(nameArr, ["patricia"]);
assertArraysEqual(newNameArr, nameArr);

const listOfItems = ["1", "2", "3"];
const newListOfItems = without(listOfItems, [1, 2, "3"]);
assertArraysEqual(newListOfItems, [2, 3]);
assertArraysEqual(newListOfItems, ["1", "2"]); 
