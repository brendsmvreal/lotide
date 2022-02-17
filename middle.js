// For arrays with one or two elements, there is no middle. Return an empty array. if condition 
// For arrays with odd number of elements, an array containing a single middle element should be returned. if condition arr.filter - return number %2 !== 0; 
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned. arr.filter - return number %2 === 0; 
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
