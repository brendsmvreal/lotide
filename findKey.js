const findKey = function(obj, callback) {
  const keysArray = Object.keys(obj);
  for (const element of keysArray) {
    let value = obj[element];
    if (callback(value)) {
      return element;
    }
  }
};
module.exports = findKey;
