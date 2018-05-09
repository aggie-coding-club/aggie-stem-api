'use strict';
module.exports = function(app) {
    var aggieStem = require('../controllers/Controller');

    //Routes
//     app.route('/tasks')
//         .get(aggieStem.list_all_tasks)
//         .post(aggieStem.create_a_task);
// 
//     app.route('/tasks/:taskId')
//         .get(aggieStem.read_a_task)
//         .put(aggieStem.update_a_task)
//         .delete(aggieStem.delete_a_task);
    
    app.route('/login')
        .post(aggieStem.login);
        
    app.route('/getschedule')
        .get(aggieStem.getschedule);
        
    app.route('/medicallookup')
        .get(aggieStem.medicallookup);
        
    app.route('/signout')
        .post(aggieStem.signout);
};
