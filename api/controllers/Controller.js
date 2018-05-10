'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

// Encryption
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = process.env.ENC_KEY_32;

function encrypt(text){
    console.log('Text', typeof(text), text);
    var cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}
    
function decrypt(text){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}

function encryptMedicine(medicine) {
    medicine.name = encrypt(medicine.name);
    medicine.amount = encrypt(medicine.amount);
    return medicine;
}

function decryptMedicine(medicine) {
    medicine.name = decrypt(medicine.name);
    medicine.amount = decrypt(medicine.amount);
    return medicine;
}

    
exports.login = function(req,res){
    // User.findOne({username:req.body.username}, function(err, student){
    //     if(err)
    //         res.send(err);
    //     res.json({username: student.username, firstname: student.firstname, lastname: student.lastname});
    // });
    res.send(req.user);
};
   
exports.getschedule = function(req,res){
    // let query = User.where({username: req.params.username});
    User.findOne({username: req.query.username}, function(err, student){
        if(err)
            res.send(err);
        else if(student) {
            let {schedule} = require(`../schedules/camp${student.camp}${student.scheduletype}`)
            res.json({schedule});
        } else
            res.json({error: 'No student'});
    });
};

exports.medicallookup = function(req,res){
    User.findOne({username: req.query.username}, (err, staff) => {
        if(err) res.send(err);
        let level = staff.userrole;
        if(staff) {
            User.findOne({username: req.query.searchusername}, (err, student) => {
                if(err)
                    res.send(err);
                else if(!student) 
                    res.json({error: 'No student'});
                else if(level == 0) {
                    // decrypt medicine
                    let medicine = decryptMedicine(student.medicine);
                    res.json({medicine, otcrestrictions: student.otcrestrictions});
                } else if(level == 1) {
                    res.json({medicine: undefined, otcrestrictions: student.otcrestrictions});
                } else
                    res.json({medicine: undefined, otcrestrictions: undefined});
            });
        }
    });
};

exports.signout = function(req,res){
    res.json({SUCC:'Logged out'});
};

exports.adduser = function(req,res){
    if(req.user.userrole == 0) {
        // encrypt medicine
        let addedUser = req.body;
        addedUser.medicine = encryptMedicine(addedUser.medicine);
        var new_user = new User(addedUser);
        new_user.save(function(err,student){
            if(err)
                res.send(err);
            res.json(student);
        });
    } else {
        res.send({});
    }
};

exports.userSearch = function(req, res) {
    let firstname = req.query.firstname;
    let lastname = req.query.lastname;

    if(firstname.length > 0 && lastname.length > 0){
        User.find({firstname, lastname}, function(err, students){
            if(err)
                res.send(err);
            else {
                res.json({users: students});
            }
        });
    } else if(firstname.length > 0) {
        User.find({firstname}, function(err, students){
            if(err)
                res.send(err);
            else {
                User.find({lastname: firstname}, function(err, students2){
                    if(err)
                        res.send(err);
                    else {
                        let allStudents = students.concat(students2);
                        res.json({users: allStudents});
                    }
                });
            }
        });
    } else if(lastname.length > 0) {
        User.find({lastname}, function(err, students){
            if(err)
                res.send(err);
            else {
                res.json({users: students});
            }
        });
    } else
        res.json({users: []});
}

// //this will attempt to list all the tasks, will error out if fails
// exports.list_all_tasks = function(req,res) {
//     Task.find({}, function(err, task){
//         if(err)
//             res.send(err);
//         res.json(task);
//     });
// };
// 
// //this will attempt to create a task
// exports.create_a_task = function(req,res){
//     var new_task = new Task(req.body);
//     new_task.save(function(err,task){
//         if(err)
//             res.send(err);
//         res.json(task);
//     });
// };
// 
// //this will attempt to read a task given
// exports.read_a_task = function(req,res) {
//     Task.findById(req.params.taskId, function(err,task){
//         if(err)
//             res.send(err);
//         res.json(task);
//     });
// };
// 
// //this will attempt to update a current task
// exports.update_a_task = function(req,res){
//     Task.findOneAndUpdate({_id: req.params.taskId}, 
//         req.body, {new:true}, function(err,task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//     });
// };
// 
// //this will attemp to delete a task
// exports.delete_a_task = function(req,res) {
//     Task.remove({
//         _id: req.params.taskId
//     }, function(err,task) {
//         if (err)
//             res.send(err);
//         res.json({ message: 'Task successfully deleted'});
//     });
// };
