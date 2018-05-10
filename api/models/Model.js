'use strict';
var mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');
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
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    userrole:{type: Number, default: 2},
    scheduletype:{type: String, required: true},
    camp:{type: Number, default: 1},
    email:{type: String, default: ""},
    medicine:[{name:{type: String}, AM:{type: Boolean}, PM:{type: Boolean}, amount: {type: String}}],
    otcrestrictions:{type:[String], default: ""},
    comments:{type:String, default: ""}
});

UserSchema.methods.verifyPassword = function(password, cb) {
    // bcrypt.compare(password, this.password, function(err, isMatch) {
    //   if (err) return cb(err);
    //   cb(null, isMatch);
    // });
    cb(null, password == this.password);
};

// Encryption
var encKey = process.env.ENC_KEY_32;
var sigKey = process.env.SIGN_KEY_64;

// encrypt medicine regardless of any other options. name and _id will be left unencrypted
UserSchema.plugin(encrypt, { encryptionKey: encKey, signingKey: sigKey, encryptedFields: ['medicine'] });

  
// module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('User', UserSchema);
