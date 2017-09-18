/*
  A data structure that models the result of operations that may fail.
  A Result helps with representing errors and propagating them, giving users a more controllable
  form of sequencing operations than that offered by constructs like try/catch.
*/
const Result = require('folktale/result'); // Either

// Simple Either example

const divideBy = (dividend, divisor) => (divisor === 0
  ? Result.Error('Division by zero')
  : Result.Ok(Math.floor(dividend / divisor)));

const result4DivideBy2 = divideBy(4, 2);

result4DivideBy2 // eslint-disable-line

const result4DivideBy0 = divideBy(4, 0); // eslint-disable-line

result4DivideBy0 // eslint-disable-line

// Chain sequencing computations
/*
  You can sequence computations in this manner with the Result structure by using the .chain method.
  The method takes as argument a single function that will receive the value in the Result structure,
  and must return a new Result structure,which then becomes the result of the method.
  Only successful values flow through the function argument, errors are just propagated to the result immediately.
*/

const isEven = result4DivideBy2.chain(value => (value % 2 === 0
  ? Result.Ok(value)
  : Result.Error('Not Even')));

isEven // eslint-disable-line

const chainError = isEven.chain(value => (value > 2
  ? Result.Ok(value)
  : Result.Error('Not > 2')));

chainError // eslint-disable-line

const propagError = chainError.chain(value => (value === 'Not > 2' // even if the condition is true the chainError is already an error so it repeats
  ? Result.Ok(value)
  : Result.Error('Invalid String')
));

propagError // eslint-disable-line

// Transforming values inside Result

const transformedValue = result4DivideBy2.map(value => value + 1);

transformedValue // eslint-disable-line

// Extracting values inside Result

const validExtractedValue = result4DivideBy2.getOrElse('not valid');

const invalidExtractedValue = result4DivideBy0.getOrElse('not valid');

validExtractedValue // eslint-disable-line

invalidExtractedValue // eslint-disable-line

// Full Validation example

const isValidName = name => name.trim() !== '';
const isValidEmail = email => /(.+)@(.+)/.test(email);
const isValidPhone = phone => /^\d+$/.test(phone);

const checkName = name => (isValidName(name)
  ? Result.Ok(name)
  : /* otherwise */ Result.Error('Name is required'));

const checkEmail = email => (isValidEmail(email)
  ? Result.Ok(email)
  : /* otherwise */ Result.Error('Invalid e-mail'));

const checkPhone = phone => (isValidPhone(phone)
  ? Result.Ok(phone)
  : /* otherwise */ Result.Error('Invalid phone'));

const optional = check => value => (value
  ? check(value).mapError(_ => _)
  : /* otherwise */ Result.Ok(value));

const maybeCheckEmail = optional(checkEmail);
const maybeCheckPhone = optional(checkPhone);

const validatePhoneType = (name, type, email, phone) => (type === 'phone'
  ? checkPhone(phone).chain(_ =>
    maybeCheckEmail(email).map(_ => ({
      name, type, email, phone
    })))
  : /* otherwise */ Result.Error('Invalid type'));

const validateResult = ({
  name, type, email, phone
}) =>
  checkName(name).chain(_ =>
    (type === 'email' ? checkEmail(email).chain(_ =>
      maybeCheckPhone(phone).map(_ => ({
        name, type, email, phone
      })))
      : validatePhoneType(name, type, email, phone)));


const invalidResult = validateResult({
  name: 'Max',
  type: 'email',
  phone: '11234456'
});

invalidResult // eslint-disable-line

const validResult = validateResult({
  name: 'Alissa',
  type: 'email',
  email: 'alissa@somedomain'
});

validResult // eslint-disable-line
