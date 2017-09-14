const Maybe = require('folktale/maybe');

const find2 = (list, predicate) => list.reduce(
  (acc, item) => (predicate(item) ? Maybe.Just(item) : acc),
  Maybe.Nothing()
);

const resultedMaybeOk = find2([1, 2, 3], x => x > 2); // Function find maybe return the result maybe not.
const resultedMaybeFail = find2([1, 2, 3], x => x > 3);

resultedMaybeOk // eslint-disable-line
resultedMaybeFail // eslint-disable-line

const resultOk = resultedMaybeOk.getOrElse(); // Get the result inside a maybe return by a function.
const resultFail = resultedMaybeFail.getOrElse('Not finded'); // Receive the default value if Maybe failed.

resultOk // eslint-disable-line
resultFail // eslint-disable-line

const transformedResultOk = resultedMaybeOk.map(i => i + 1); // keeping wrapped (functor)
const transformedResultFail = resultedMaybeFail.map(i => i + 1);

transformedResultOk // eslint-disable-line
transformedResultFail // eslint-disable-line

const unwrappedMapOk = resultedMaybeOk.chain(i => i + 1); // maps and unwrap from maybe (monad)
const unwrappedMapFail = resultedMaybeFail.chain(i => i + 1);

unwrappedMapOk // eslint-disable-line
unwrappedMapFail // eslint-disable-line
