const middle = function(midArray) {
  if (midArray.length <= 2) {
    return [];
  } else if (midArray.length % 2 === 0) {
    return [midArray[midArray.length/2 - 1], midArray[midArray.length/2]];
  } else {
    return [midArray[Math.floor(midArray.length/2)]];
  }
} 

module.exports = middle;

