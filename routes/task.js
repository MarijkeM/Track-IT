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

//taken toevoegen: /task/takenToevoegen
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

/*
//taak verwijderen: /task/id
router.delete('/:id', async (req, res) => {
    console.log("***routes/task taak verwijderen");

    try {
        const task = await Task.findById(req.params.id);

        try{
            Task.deleteTask(task);

            res.json({
                success: true,
                msg: 'Taak verwijderen is gelukt'
            })
        }catch (e){
            res.json({
                success: false,
                msg: 'Taak niet kunnen verwijderen: ' + e});
        }

    } catch (e) {
        res.json({
            success: false,
            msg: 'Taak niet gevonden: ' + e});
    }
});

*/
module.exports = router;