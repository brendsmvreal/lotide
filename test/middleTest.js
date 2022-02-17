const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const findMidNum = [1, 2, 3, 4, 5, 6];
const midNum = middle(findMidNum);
assertArraysEqual(midNum, [3, 4]); // passes 

const noMidNum = [1,2];
const noMidNumArr = middle(noMidNum);
assertArraysEqual(noMidNumArr, []); // passes 

const oddMidArr = [1,2,3];
const oddNum = middle(oddMidArr);
assertArraysEqual(oddMidArr, [2,3]); // fails 

const midArrNum = [1,2,3];
const oneMidNum = middle(midArrNum);
assertArraysEqual(oneMidNum, [2]); // passes 