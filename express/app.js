const express = require('express');
const app = express();
const port = 4000;



const checkWorkingHours = require('./middleware/time');


app.set('view engine', 'pug');
app.use(express.static("public"));


app.get('/', function(req, res){
    res.render('home');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/serv', function(req, res){
    res.render('services');
});





app.listen(port, function(){
    console.log('The server is running, ' +
        'please, open your browser at http://localhost:%s',
        port);
});
