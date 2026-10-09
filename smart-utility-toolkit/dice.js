// dice.js
// Random Dice Generator using the crypto module

const crypto = require('crypto');
const log = require('./modules/logger');

function rollDice() {
  // crypto.randomInt(min, maxExclusive) -> secure random integer in [1, 6]
  return crypto.randomInt(1, 7);
}

function rollMultiple(times) {
  log(`Rolling dice ${times} time(s)`);
  for (let i = 1; i <= times; i++) {
    const value = rollDice();
    console.log(`Roll ${i}: Dice Rolled: ${value}`);
  }
}

// Optional: node dice.js 10  -> rolls the dice 10 times
const numberOfRolls = parseInt(process.argv[2]) || 5;
rollMultiple(numberOfRolls);
