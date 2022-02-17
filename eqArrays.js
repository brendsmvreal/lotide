const eqArrays = function(arr1, arr2) {
  let output = true;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      output = output && eqArrays(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      output = output && false;
    }
  }
  return output;
};

module.exports = eqArrays;

/* if (arr1.length !== arr2.length) {
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
return; */