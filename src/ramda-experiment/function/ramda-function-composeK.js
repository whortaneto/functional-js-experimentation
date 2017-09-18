/*
  Returns the right-to-left Kleisli composition of the provided functions,
  each of which must return a value of a type supported by chain.
  R.composeK(h, g, f) is equivalent to R.compose(R.chain(h), R.chain(g), R.chain(f)).
*/

const composeK = require('ramda/src/composeK'); // Compose monads (containers that support chain)
const compose = require('ramda/src/compose');

const {
  chain // flatMap -> chain maps a function over a list and concatenates the results
} = require('ramda');

const duplicateToArray = n => [n, n];

const sumToArray = n => [n + 1];

const result = chain(duplicateToArray, chain(sumToArray, [1, 2, 3]));

const result2 = compose(chain(duplicateToArray), chain(sumToArray))([1, 2, 3]);

const result3 = composeK(duplicateToArray, chain(sumToArray))([1, 2, 3]); // weird

result // eslint-disable-line

result2 // eslint-disable-line

result3 // eslint-disable-line
