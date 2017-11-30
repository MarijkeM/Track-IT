/**
 * Created by Marijke on 30/11/2017.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Registreer: /user/registreren
router.post('/registreren', function (req, res, next) {
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email:req.body.email,
        password:req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success:false,
                msg:'Registreren is mislukt'})
        }else{
            res.json({success:true,
                msg:'Registreren is gelukt'})
        }
    });
});

//Authenticatie: /user/authenticeren
router.post('authenticeren', (req, res, next) => {
    res.send('Authenticeer');
});

//Profiel: /user/profiel
router.get('/profiel', (req, res, next) =>{
    res.send('Uw profiel');
});

module.exports = router;