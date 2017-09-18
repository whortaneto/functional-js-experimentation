/*
  A data structure that typically models form validations, and other scenarios where you want to aggregate all failures,
  rather than short-circuit if an error happens (for which Result is better suited).
*/
const Validation = require('folktale/validation');

const { Success, Failure } = Validation;
const curry = require('folktale/core/lambda/curry');

const isPasswordLongEnough = password => (password.length > 6
  ? Success(password)
  : /* otherwise */ Failure(['Password must have more than 6 characters.']));

const isPasswordStrongEnough = password => (/[\W]/.test(password)
  ? Success(password)
  : /* otherwise */ Failure(['Password must contain a special character.']));

const isPasswordValid = password =>
  Success().concat(isPasswordLongEnough(password))
    .concat(isPasswordStrongEnough(password))
    .map(_ => password);

const invalidPassWordNumChar = isPasswordValid('foo'); // Num char and special char Accumulate both errors

invalidPassWordNumChar // eslint-disable-line

const invalidPassWordSpecialChar = isPasswordValid('rosesarered'); // Just special char

invalidPassWordSpecialChar // eslint-disable-line

const validPassword = isPasswordValid('rosesarered$andstuff');

validPassword // eslint-disable-line

// Combining validations

const failureWithFailure = Failure('a').concat(Failure('b'));

failureWithFailure // eslint-disable-line

const failureWithSuccess = Failure('a').concat(Success('b'));

failureWithSuccess // eslint-disable-line

const successWithSuccess = Success('a').concat(Success('b'));

successWithSuccess // eslint-disable-line

/*
  If you have a constructor for a data structure that can be curried,
  it's often more convenient to use the .apply method instead:
*/

const Language = (name, compiler) => ({ name, compiler });

const validationResult = Success(curry(2, Language))
  .apply(Success('Rust'))
  .apply(Success('rustc'));

validationResult // eslint-disable-line

// if you have an array of validations, it's convenient to use the module-level collect function

const { collect } = require('folktale/validation');

const validationArrayResult = collect([Failure('a'), Failure('b'), Success('c')]); // Take just the errors from the array

validationArrayResult // eslint-disable-line
