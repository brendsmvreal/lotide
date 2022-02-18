const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  const myKeys = Object.keys(object1);
  for (let element of myKeys) { 
    const value1 = object1[element]; 
    const value2 = object2[element]; 
    if (Array.isArray(value1) || Array.isArray(value2)) {
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

module.exports = eqObjects;
