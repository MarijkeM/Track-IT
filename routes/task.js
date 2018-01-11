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


//alle taken van 1 persoon ophalen: /task/alleTaken
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

//alle taken van 1 persoon ophalen: /task/alleTaken
router.get('/alleTakenTodo', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/taks/alletaken taken van bepaalde user");

    try{
        tasks = await Task.getTasksTodo(req.user);
        res.json(tasks);
    } catch (error){
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Taken niet gevonden: ' + error
        });
    }
});

//alle taken van 1 persoon ophalen: /task/alleTaken
router.get('/alleTakenDone', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/taks/alletaken taken van bepaalde user");

    try{
        tasks = await Task.getTasksDone(req.user);
        res.json(tasks);
    } catch (error){
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Taken niet gevonden: ' + error
        });
    }
});


//taak toevoegen: /task/taakToevoegen
router.post('/taakToevoegen', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/task taak toevoegen");
    var statusBody = req.body.status.toString();


    if(statusBody.toString() !== "Todo" && statusBody.toString() !== "Done" ){
        statusBody = "Todo";
    }

    let newTask = new Task({
        title: req.body.title,
        estimatedTime: req.body.estimatedTime,
        user: req.user,
        status: statusBody,
        dateDeadline: req.body.dateDeadline,
        priority:req.body.priority
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
            msg: 'Taak toevoegen is mislukt: ' + e});
    }
});

//taak wijzigen: /task/taakWijzigen/id
router.put('/taakWijzigen/:id', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/task/taakWijzigen/" + req.params.id);
    const taskId = req.params.id;


    var update = ({
        title: req.body.title,
        estimatedTime: req.body.estimatedTime,
        dateFinished: req.body.dateFinished,
        user: req.body.user,
        status: req.body.status,
        dateDeadline: req.body.dateDeadline,
        priority:req.body.priority
    });

    console.log("een logje");
     console.log("nieuwe taak: " + JSON.stringify(update));
     console.log("req.user._id: " + JSON.stringify(req.user._id));
     /*console.log("users komen overeen is " + (JSON.stringify(task.user) === JSON.stringify(req.user._id)));
*/

    try {
        var task = await Task.findTaskById(taskId);

        if(task == null){
            res.json({
                success: false,
                msg: 'Taak bestaat niet'
            });
        }else if(update.user.toString() !=(req.user._id).toString()){

            res.json({
                success: false,
                msg: 'Je kan de taak niet aanpassen: '
            });
        }else{
            await Task.updateTask(taskId, update);

            res.json({
                success: true,
                msg: 'Taak updaten is gelukt'
            })
        }
    } catch (e) {
        res.json({
            success: false,
            msg: 'Taak updaten is mislukt: ' + e});
    }
});

//taak verwijderen: /task/taakVerwijderen/id
router.delete('/taakVerwijderen/:id', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/task/taakVerwijderen/id taak verwijderen");
    console.log("id: " + req.params.id);
    const taskId = req.params.id;

    try{
        task = await Task.findTaskById({_id: taskId});
        console.log("taak: " + JSON.stringify(task));

        if(task == null) {
            res.json({
                success: false,
                msg: 'Taak bestaat niet'
            });

        } else if(task.user != req.user._id.toString()){
            let user1 = task.user;
            let user2 = req.user._id;
            res.json({
                success: false,
                msg: 'Dit is niet jou taak: '
            });

        }else{
            await Task.deleteTask(taskId, req.user);
            res.json({
                success: true,
                msg: 'Taak verwijderd'
            });
        }

    }catch(e){
        res.json({
            success: false,
            msg: 'Taak verwijderen mislukt'
        });
    }
});

module.exports = router;