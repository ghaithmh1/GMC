const express = require('express');
const fs = require ('fs');
const app = express();
const port = 4000;

app.get('/hello/:msg', function(req, res){
    const msg = req.params.msg;
    
    fs.readFile("txt.txt", (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end("Error reading file");
          console.error(err);
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(`${data.toString()}  ${msg}`);
        }
      });
});

app.get('/bay/:msg', function(req, res){
    const msg = req.params.msg;
    res.end(`bay ${msg}`);
});





app.listen(port, function(){
    console.log('The server is running, ' +
        'please open your browser at http://localhost:%s', port);
});
