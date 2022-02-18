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

module.exports = countLetters;


