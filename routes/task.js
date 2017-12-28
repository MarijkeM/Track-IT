/**
 * Created by Marijke on 28/12/2017.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Task = require('../models/task');

//taken: /user/taken
router.get('/taken', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({task: req.task});
    console.log("***router get taken");
});

module.exports = router;