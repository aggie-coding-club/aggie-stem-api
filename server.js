var express = require('express'),
    app = express(),
    port = process.env.PORT || 9000,
    domain = process.env.DOMAIN || 'localhost';
    mongoose = require('mongoose');
    Task = require('./api/models/Model'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    authController = require('./api/controllers/auth');

//mongoose instance connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/StemAPP');

let User = mongoose.model('User');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });

// Set up routes
var router = require('./api/routes/Routes'); 
app.use('/',router);


app.listen(port, domain,() => {
    console.log(`API started on port ${port}`);
});