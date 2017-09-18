/*
  Applies function fn to the argument list args.
  This is useful for creating a fixed-arity function from a variadic function.
  fn should be a bound function if context is significant.
  Array of values is passed as argument to the function
*/

const apply = require('ramda/src/apply');

const {
  multiply
} = require('ramda');

const arrayOfValues = [1, 2, 3, 4, 5];

const objectFromValues = (arg1, arg2, arg3, arg4) => ({
  arg1, arg2, arg3, arg4
});

const result = apply(multiply, arrayOfValues);

result // eslint-disable-line

const result2 = apply(objectFromValues, arrayOfValues);

result2 // eslint-disable-line
