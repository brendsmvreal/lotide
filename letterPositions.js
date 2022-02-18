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

module.exports = letterPositions;
