const takeUntil = function(array, callback) {
  let sliceArr = [];
  for (const element of array) {
    if (!callback(element)) {
      sliceArr.push(element);
    } else {
      return sliceArr;
    }
  }
};

module.exports = takeUntil;