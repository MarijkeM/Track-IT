/**
 * Created by Marijke on 28/12/2017.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Task = require('../models/task');

//taken: /task
router.get('/', (req, res) => {
    res.json({task: req.task});
    console.log("***router get taken");
});

//taken toevoegen: /task/taakToevoegen
router.post('/taakToevoegen', async (req, res) => {
    console.log("***routes/task taak toevoegen");

    let newTask = new Task({
        title: req.body.title,
        estimatedTime: req.body.estimatedTime,
    });

    try {
        await Task.addTask(newTask);

        res.json({
            success: true,
            msg: 'Taak toevoegen is gelukt'
        })
    } catch (e) {
        res.json({
            success: false,
            msg: 'Toek toevoegen is mislukt: ' + e});
    }
});


//taak verwijderen: /task/taakVerwijderen/id
router.delete('/taakVerwijderen/:id', (req, res) => {
    console.log("***routes/task/taakVerwijderen/id taak verwijderen");
    console.log("id: " + req.params.id);
    const taskId = req.params.id;

    Task.findOne({_id: taskId}, function (err) {
        if(err){
            console.log("id bestaat niet");
            res.json({
                success: false,
                msg: 'Taak bestaat niet: ' + err
            });
        }else{
            Task.deleteTask(taskId, function (err) {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'Taak verwijderen mislukt: ' + err
                    });
                }
                res.json({
                    success: true,
                    msg: 'Taak verwijderen is gelukt'
                });
            });
        }
    });

});

module.exports = router;