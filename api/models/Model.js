'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var TaskSchema = new Schema({
//     name: {
//         type: String,
//         required: 'Please enter the name of the task'
//     },
//     Created_date: {
//         type: Date,
//         default: Date.now
//     },
//     status: {
//         type: [{
//             type: String,
//             enum: ['pending','ongoing','completed']
//         }],
//         default: ['pending']
//     }
// });

var StudentSchema = new Schema({
    username:{
        type: String,
        required: 'Username required'
    },
    password:{
        type: String,
        required: 'Password Required'
    },
    firstname:{type: String},
    lastname:{type: String},
    userrole:{type: int},
    scheduletype:{type: String},
    camp:{type: int},
    email:{type: String},
    medicine:[{name:{type: String}, AM:{type: bool}, PM:{type:bool}}],
    otcrestrictions:{type:[String]},
    comments:{type:String}
});

// module.exports = mongoose.model('Tasks', TaskSchema);
modele.exports = mongoose.model('Student', StudentSchema);
