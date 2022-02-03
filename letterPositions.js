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
// For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.
const letterPositions = function(str) {
  const results = {};
  str = str.replace(' ', '');

  for (let i = 0; i < str.length; i++) {
    if (!results[str[i]])
      results[str[i]] = [i];
    else
      results[str[i]].push(i);
  }

  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 15, 21]);
assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
assertArraysEqual(letterPositions("hello").e, [0]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [5]);