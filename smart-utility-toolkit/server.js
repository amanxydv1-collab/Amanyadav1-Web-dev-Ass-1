// server.js
// Basic HTTP server using the built-in http module

const http = require('http');
const log = require('./modules/logger');

const PORT = 3000;

const server = http.createServer((req, res) => {
  log(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Welcome to Node Server');
      break;

    case '/about':
      res.statusCode = 200;
      res.end('About Page');
      break;

    case '/contact':
      res.statusCode = 200;
      res.end('Contact Page');
      break;

    default:
      res.statusCode = 404;
      res.end('404 Error: Page Not Found');
  }
});

server.listen(PORT, () => {
  log(`Server running at http://localhost:${PORT}/`);
  console.log('Try visiting:');
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  http://localhost:${PORT}/about`);
  console.log(`  http://localhost:${PORT}/contact`);
  console.log(`  http://localhost:${PORT}/randomroute  (shows 404)`);
});
