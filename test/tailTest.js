const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);