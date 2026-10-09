// modules/logger.js
// Custom module that logs messages with a timestamp

function log(message) {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[LOG - ${timestamp}] ${message}`);
}

module.exports = log;
