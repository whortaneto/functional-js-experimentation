const {
  fromPairs, // Receives a array of (key, values) pairs and returns a object
  toPairs, // Receives a object pairs and returns a array of (key, values)
  values, // Return the values of the all keys from a object
  mapValues, // Maps values from a object,
} = require('folktale/core/object');

const {
  compose, // Compose two functions
  partialize, // Make a function capable of partial apply
  partialize: {
    hole: _ // Used to specify not used parameters in partial appy
  },
  identity // Return the same value that receive
} = require('folktale/core/lambda');

const objectFromPairs = fromPairs([['x', 10], ['y', 20]]);

objectFromPairs // eslint-disable-line

const pairsFromObject = toPairs(objectFromPairs);

pairsFromObject // eslint-disable-line

const object = fromPairs([
  ['name', 'wagner'],
  ['age', 21]
]);

const identityMapValues = partialize(2, mapValues)(_, identity);

const valuesFromMap = compose(values, identityMapValues);

const result = valuesFromMap(object);


result // eslint-disable-line