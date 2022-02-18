const findKeyByValue = function(object,value) {
  const myKeys = Object.keys(object);
  for (const element of myKeys) {
   if (value === object[element]) {
     return element;
   }
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;
