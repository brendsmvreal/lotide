const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        break;
      }
      if (j == itemsToRemove.length - 1) {
        newArray.push(source[i]);
      }
    }
  }
  return newArray;
};

module.exports = without; 

