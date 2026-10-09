// calculator.js
// CLI-based calculator using process.argv
// Example: node calculator.js add 10 5

const log = require('./modules/logger');

const args = process.argv.slice(2); // skip "node" and "calculator.js"
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

function calculate(op, a, b) {
  switch (op) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return a / b;
    default:
      throw new Error(
        `Invalid operation "${op}". Supported operations: add, subtract, multiply, divide`
      );
  }
}

// Validate inputs
if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log('Usage: node calculator.js <operation> <num1> <num2>');
  console.log('Example: node calculator.js add 10 5');
  process.exit(1);
}

try {
  log(`Performing operation: ${operation} on ${num1} and ${num2}`);
  const result = calculate(operation, num1, num2);
  console.log(`Result: ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
