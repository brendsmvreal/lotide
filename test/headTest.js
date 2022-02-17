const head = require('../head');
const assertEqual = require('../assertEqual');


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7,8,9,10]), 2,5);