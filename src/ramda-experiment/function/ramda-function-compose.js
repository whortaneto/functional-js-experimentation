/*
  Performs right-to-left function composition.
  The rightmost function may have any arity; the remaining functions must be unary.
  Note: The result of compose is not automatically curried
*/

const compose = require('ramda/src/compose');

const {
  toUpper,
  add,
  multiply
} = require('ramda');

const classyGreeting = (firstName, lastName) => `The name's ${lastName}, ${firstName}, ${lastName}`;

const yellGreeting = compose(toUpper, classyGreeting);

const result = yellGreeting('James', 'Bond');

const result2 = compose(Math.abs, add(1), multiply(2))(-4);

result // eslint-disable-line

result2 // eslint-disable-line
