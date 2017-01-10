var express = require('express');
var bodyparser = require('body-parser');
var routes = require('./app/routes');

var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.set('views', './public');

routes.configure(app);
 
var port = process.argv[2] || 8000;

var server = app.listen(port, function() {
  console.log('Server listening on port ' + port);
});

exports = module.exports = app;