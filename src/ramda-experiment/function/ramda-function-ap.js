/*
  ap applies a list of functions to a list of values.
  The result of the apply will be a array that contains the results of each function
  So 3 functions applied to a array of length 3 will result in a array of legth 9
  (Applicative)
*/

const {
  ap,
  multiply,
  add
} = require('ramda');

const arrayOfFunctions = [multiply(2), add(1)];
const arrayOfValues = [1, 2, 3];

const result = ap(arrayOfFunctions, arrayOfValues);

result // eslint-disable-line
