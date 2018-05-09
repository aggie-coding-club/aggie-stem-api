'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

    
exports.login = function(req,res){
    User.findOne({username:req.params.username}, function(err, student){
        if(err)
            res.send(err);
        res.json({username: student.username, firstname: student.firstname, lastname: student.lastname});
    });
};
   
exports.getschedule = function(req,res){
    User.findOne({username: req.params.username}, function(err, student){
        if(err)
            res.send(err);
        res.json({scheduletype: student.scheduletype});
    });
};

exports.medicallookup = function(req,res){
    User.findOne({username: req.params.username}, (err, staff) => {
        if(err) res.send(err);
        let level = staff.userrole;

        User.findOne({firstname: req.params.firstname, lastname: req.params.lastname}, (err, student) => {
            if(err)
                res.send(err);
            else if(level == 0)
                res.json({medicine: student.medicine, otcrestrictions: student.otcrestrictions});
            else if(level == 1)
                res.json({medicine: undefined, otcrestrictions: student.otcrestrictions});
            else
                res.json({medicine: undefined, otcrestrictions: undefined});
        });
    });
};

exports.signout = function(req,res){
    res.json({SUCC:'Logged out'});
};

exports.adduser = function(req,res){
    var new_user = new User(req.body);
    new_user.save(function(err,student){
        if(err)
            res.send(err);
        res.json(student);
    });
};

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
