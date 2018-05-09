var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    domain = 'stem-dev.education.tamu.edu';
    mongoose = require('mongoose');
    Task = require('./api/models/Model'),
    bodyParser = require('body-parser')

//mongoose instance connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/StemAPP');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
//   });

var routes = require('./api/routes/Routes'); 
routes(app);

app.listen(port, domain,() => {
    console.log(`API started on port ${port}`);
});

