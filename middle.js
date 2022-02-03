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
// For arrays with one or two elements, there is no middle. Return an empty array. if condition 
// For arrays with odd number of elements, an array containing a single middle element should be returned. if condition arr.filter - return number %2 !== 0; 
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned. arr.filter - return number %2 === 0; 
const middle = function(midArray) {
  if (midArray.length <= 2) {
    return [];
  } else if (midArray.length % 2 === 0) {
    return [midArray[midArray.length/2 - 1], midArray[midArray.length/2]];
  } else {
    return [midArray[Math.floor(midArray.length/2)]];
  }
} 

const findMidNum = [1, 2, 3, 4, 5, 6];
const midNum = middle(findMidNum);
assertArraysEqual(midNum, [3, 4]); // passes 

const noMidNum = [1,2];
const noMidNumArr = middle(noMidNum);
assertArraysEqual(noMidNumArr, []); // passes 

const oddMidArr = [1,2,3];
const oddNum = middle(oddMidArr);
assertArraysEqual(oddMidArr, [2,3]); // fails 

const midArrNum = [1,2,3];
const oneMidNum = middle(midArrNum);
assertArraysEqual(oneMidNum, [2]); // passes 