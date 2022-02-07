const findKey = function(obj, callback) {
  var keysArray = Object.keys(obj);
  for (const element of keysArray) {
    var value = obj[element];
    if (callback(value)) {
      return element;
    }
  }
};
const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
const thingsWithStars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const actual = findKey(thingsWithStars, x => x.stars === 2);
assertEqual(actual, "noma");

const actual2 = findKey(thingsWithStars, x => x.stars === 2);
assertEqual(actual2, "elBulli");

const actual3 = findKey(thingsWithStars, x  => x.stars === 100);
assertEqual(actual3, undefined);

const actual4 = findKey(thingsWithStars, x => x.stars > 2);
assertEqual(actual4, "Akaleri");