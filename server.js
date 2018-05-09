var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    mongoose = require('mongoose');
    Task = require('./api/models/Model'),
    bodyParser = require('body-parser')

//mongoose instance connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27107/test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });

var routes = require('./api/routes/Routes'); 
routes(app);

app.listen(port);

console.log("API started");

