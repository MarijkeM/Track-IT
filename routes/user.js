/**
 * Created by Marijke on 30/11/2017.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');


//Registreer: /user/registreren
router.post('/registreren', function (req, res, next) {
    console.log("***router post registreren");

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


//Authenticatie/inloggen: /user/authenticeren
router.post('/authenticeren', (req, res, next) => {
    //als persoon inlogt, geeft die de volgende gegevens door
    const email = req.body.email;
    const password = req.body.password;

    console.log("***router post authenticate");

    //nakijken of de user bestaat
    User.getUserByEmail(email, (err, user)=>{
        console.log("user: "+user);
        console.log("error: "+err);
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'Gebruiker niet gevonden'})
        }

        //nakijken of paswoord klopt
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                //we maken een token die een week geldig is
                const token = jwt.sign({data:user}, config.secret,{
                    expiresIn: 604800 //1 week in seconden

                });

                //wat we gaan terugsturen naar de frontend
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    }
                });
            }else{
                return res.json({success: false, msg: 'Verkeerd paswoord'});
            }
        });
    });
});


//Profiel: /user/profiel
router.get('/profiel', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
    console.log("***router get profiel");
});

module.exports = router;