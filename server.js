var express = require('express');
var app = express();

app.use(express.logger('dev'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

var data = {title: 'Donny'};

app.get('/', function(req, res){
    res.render('index', data);
});

app.listen(8080);
console.log('Listening on port 8080');
