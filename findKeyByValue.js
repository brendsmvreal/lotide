const assertEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) { // Boolean functions do not require the equal operator 
    console.log(`✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] }; //object1
const dc = { d: ["2", 3], c: "1" }; 
assertEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] }; //object2
assertEqual(cd, cd2); // => false