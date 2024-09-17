const http = require('http');
const fs = require('fs');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Read the file when a request is made
  fs.readFile("welcome.txt", (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end("Error reading file");
      console.error(err);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data.toString());
    }
  });
});


server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
