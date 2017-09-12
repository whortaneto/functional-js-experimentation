const {
  compose, // Compose two functions
  partialize, // Make a function capable of partial apply
  partialize: {
    hole: _ // Used to specify not used parameters in partial appy
  },
  curry // Transform a normal function in a curried function
} = require('folktale/core/lambda');

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const inc = partialize(2, add)(1, _);
const double = curry(2, multiply)(2);
const incDouble = compose(double, inc);

const result = incDouble(3);


result // eslint-disable-line