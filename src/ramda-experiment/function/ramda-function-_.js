/*
  A special placeholder value used to specify "gaps" within curried functions,
  allowing partial application of any combination of arguments, regardless of their positions.
*/

const {
  __,
  add
} = require('ramda');

const addTwo = add(2, __);

const result = addTwo(1);

result // eslint-disable-line
