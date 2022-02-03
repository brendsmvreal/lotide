const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(newStr) {
  const results = {};
  newStr = newStr.replace(' ', '');

  for (const letter of newStr) {
    if (!results[letter])
      results[letter] = 1;
    else
      results[letter]++;
  }

  return results;
};
const result1 = countLetters("LHL");
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);
