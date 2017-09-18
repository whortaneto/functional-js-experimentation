/*
  Performs right-to-left composition of one or more Promise-returning functions.
  The rightmost function may have any arity; the remaining functions must be unary.
*/

const composeP = require('ramda/src/composeP'); // Compose monads (containers that support chain)

const db = {
  users: {
    JOE: {
      name: 'Joe',
      followers: ['STEVE', 'SUZY']
    }
  }
};

// We'll pretend to do a db lookup which returns a promise
const lookupUser = userId => Promise.resolve(db.users[userId]);
const lookupFollowers = user => Promise.resolve(user.followers);

//  followersForUser :: String -> Promise [UserId]
const followersForUser = composeP(lookupFollowers, lookupUser);
// Followers: ["STEVE","SUZY"]

const result = lookupUser('JOE').then(lookupFollowers);

const result2 = followersForUser('JOE').then(followers => followers);

result // eslint-disable-line

result2 // eslint-disable-line
