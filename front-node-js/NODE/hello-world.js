console.log("HELLO WORLD");

const http = require('http');

const { Console } = require('console');


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});



  
const fs = require("fs");
fs.readFile('welcome.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});

