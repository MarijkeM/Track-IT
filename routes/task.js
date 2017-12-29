/**
 * Created by Marijke on 28/12/2017.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Task = require('../models/task');
const User = require('../models/user');

//taken: /task/alleTaken
router.get('/alleTaken', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/taks/alletaken taken van bepaalde user");

    try{
        tasks = await Task.getTasks(req.user);
        res.json(tasks);
    } catch (error){
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Taken niet gevonden: ' + error
        });
    }
});

//taken toevoegen: /task/taakToevoegen
router.post('/taakToevoegen', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/task taak toevoegen");

    let newTask = new Task({
        title: req.body.title,
        estimatedTime: req.body.estimatedTime,
        user: req.user
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
router.delete('/taakVerwijderen/:id', passport.authenticate('jwt', {session:false}),async (req, res) => {
    console.log("***routes/task/taakVerwijderen/id taak verwijderen");
    console.log("id: " + req.params.id);
    const taskId = req.params.id;

    try{
        await Task.findOne({_id: taskId});
        await Task.deleteTask(taskId);

        res.json({
            success: true,
            msg: 'Taak verwijderd'
        });
    }catch(e){
        res.json({
            success: false,
            msg: 'Taak verwijderen mislukt: ' + e
        });
    }
    /*
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
    */

});

module.exports = router;