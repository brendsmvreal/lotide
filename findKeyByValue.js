const findKeyByValue = function(object,value) {
  const myKeys = Object.keys(object);
  for (const element of myKeys) {
    if (value === object[element]) {
      return element;
    }
  }
};

module.exports = findKeyByValue;
