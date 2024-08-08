console.log("HELLO WORLD");

const http = require('http');
const fs = require("fs");


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});





fs.readFile('welcome.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log(data);
});


