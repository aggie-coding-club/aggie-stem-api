'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

    
exports.login = function(req,res){
    Student.find({'username':req.params.username}, function(err, student){
        if(err)
            res.send(err);
        res.json(student._id);
    });
};
   
exports.getschedule = function(req,res){
    Student.find({'username': req.params.username}, function(err, student){
        if(err)
            res.send(err);
        res.json(studnet.scheduletype);
    });
};

exports.medicallookup = function(req,res){
    var staff = Student.find({'username': req.params.username})
    level = staff.userrole;
    var query = Student.find().where('firstname').equals(req.params.firstname).where('lastname').equals(req.params.lastname);
    query.exec(function(err, student){
        if(err)
            res.send(err);
        if(level == 0)
            res.json({student.medicine, student.otcrestrictions});
        else if(level == 1)
            res.json(student.otcrestrictions);
        else
            res.json(0);
    });
};

exports.signout = function(req,res){
    res.json(SUCC:'Logged out');
};

exports.adduser = function(req,res){
    var new_user = new Student(req.body);
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
