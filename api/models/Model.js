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

var UserSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    userrole:{type: int, default: 2},
    scheduletype:{type: String, required: true},
    camp:{type: int, default: 1},
    email:{type: String, default: ""},
    medicine:[{name:{type: String}, AM:{type: bool}, PM:{type:bool}}],
    otcrestrictions:{type:[String], default: ""},
    comments:{type:String, default: ""}
});

// module.exports = mongoose.model('Tasks', TaskSchema);
modele.exports = mongoose.model('User', UserSchema);
