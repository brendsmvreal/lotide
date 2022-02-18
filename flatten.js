const flatten = function(array) {
  let flattenedArray = []; 
  for (let i = 0; i < array.length; i++) {
    const currentArray = array[i];
    if (!Array.isArray(currentArray)){
      flattenedArray.push(currentArray);
      continue;
    }
    for (let j = 0; j < currentArray.length; j++) {
      flattenedArray.push(currentArray[j]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
