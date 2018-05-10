var express = require('express');
var router = express.Router();

var aggieStem = require('../controllers/Controller');
var {isAuthenticated} = require('../controllers/auth');

    //Routes
//     app.route('/tasks')
//         .get(aggieStem.list_all_tasks)
//         .post(aggieStem.create_a_task);
// 
//     app.route('/tasks/:taskId')
//         .get(aggieStem.read_a_task)
//         .put(aggieStem.update_a_task)
//         .delete(aggieStem.delete_a_task);
    
router.post('/login', isAuthenticated,aggieStem.login);
    
router.get('/getschedule', isAuthenticated,aggieStem.getschedule);
    
router.get('/medicallookup', isAuthenticated, aggieStem.medicallookup);
    
router.post('/signout',isAuthenticated,aggieStem.signout);

router.post('/adduser',isAuthenticated,aggieStem.adduser);

router.get('/searchusers',isAuthenticated,aggieStem.userSearch);

module.exports = router;
