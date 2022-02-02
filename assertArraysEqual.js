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
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
