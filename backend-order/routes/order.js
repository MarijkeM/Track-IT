/**
 * Created by Arne on 29/01/2018.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Order = require('../models/order');

/**
//Profiel: /user/profiel
router.get('/profiel', passport.authenticate('jwt', {session:false}), (req, res) => {
    console.log("***routes/user/profiel");
    console.log("user waarvan het profiel genomen wordt: " + req.user);
    return res.json({user: req.user});
});
 **/

module.exports = router;