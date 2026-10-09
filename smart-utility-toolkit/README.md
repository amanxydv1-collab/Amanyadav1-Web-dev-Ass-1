# Smart Utility Toolkit

A collection of Node.js core-module mini utilities (no external packages).



- `calculator.js` — CLI calculator using `process.argv`
- `modules/isEven.js` — custom module (isEven check)
- `modules/logger.js` — custom module (timestamped logger)
- `app.js` — demonstrates reusing the custom modules
- `server.js` — basic HTTP server with routes `/`, `/about`, `/contact`
- `fileManager.js` — CRUD file operations using `fs`
- `dice.js` — secure random dice roller using `crypto`
- `test.txt` — scratch file used/deleted by `fileManager.js`


# 1. Calculator
node calculator.js add 10 5
node calculator.js subtract 20 8
node calculator.js multiply 6 7
node calculator.js divide 10 0     # handled gracefully

# 2. Custom module reuse demo
node app.js

# 3. HTTP server
node server.js
# then visit http://localhost:3000/, /about, /contact, or any invalid route

# 4. File manager (create -> read -> update -> read -> delete)
node fileManager.js

# 5. Dice generator
node dice.js        # rolls 5 times by default
node dice.js 10      # rolls 10 times
```