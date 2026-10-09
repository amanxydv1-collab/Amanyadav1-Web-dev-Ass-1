// app.js
// Demonstrates creating custom modules and reusing them in another file

const isEven = require('./modules/isEven');
const log = require('./modules/logger');

log('Starting app.js - Module Reusability Demo');

const numbers = [3, 4, 7, 10, 15, 22];

numbers.forEach((num) => {
  if (isEven(num)) {
    log(`${num} is Even`);
  } else {
    log(`${num} is Odd`);
  }
});

log('app.js execution completed');

/*
  Run: node app.js

  This shows module reusability:
  - isEven.js exports a single function using module.exports
  - logger.js exports a logging function using module.exports
  - Both are imported here using require() and reused freely
*/
