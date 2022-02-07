// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// Take in two objects and returns true or false, based on a perfect match.
const eqObjects = function(object1, object2) {
  // first compare the number of keys in xboth objects
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // [c, d]
  const myKeys = Object.keys(object1); // retrieve list of keys from object1
  for (let element of myKeys) { 
    const value1 = object1[element]; // object1[d] = ["2", 3] // retrive value from both objects 
    const value2 = object2[element]; // object2[d] = ["2", 3 , 4]
    if (Array.isArray(value1) || Array.isArray(value2)) {
      // true or false
      const valueArraysAreEqual = eqArrays(value1, value2);
      if (!valueArraysAreEqual) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const isEqual = eqObjects(actual, expected) // returns a boolean 
  if (isEqual) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(actual)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true
