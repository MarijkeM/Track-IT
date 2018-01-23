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
router.post('/registreren', async (req, res) => {
    console.log("***routes/user registreren");

    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    try {
        await User.addUser(newUser);

        res.json({
            success: true,
            msg: 'Registreren is gelukt'
        })
    } catch (e) {
        res.json({
            success: false,
            msg: 'Registreren is mislukt: ' + e});
    }
});


//Authenticatie/inloggen: /user/authenticeren
router.post('/authenticeren', async (req, res) => {
    //als persoon inlogt, geeft die de volgende gegevens door
    const email = req.body.email;
    const password = req.body.password;

    console.log("***routes/user authenticeren");

    //nakijken of de user bestaat
    try{
        user = await User.getUserByEmail(email);
        if(user == null){
            return res.json({
                success: false,
                msg: 'Gebruiker niet gevonden'})
        }
    }catch (e){
        return res.json({
            success: false,
            msg: 'Gebruiker niet gevonden'})
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
                return res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email
                    },
                    msg:'Je bent ingelogd.'
                });
            }else{
                return res.json({success: false, msg: 'Verkeerd paswoord'});
            }
        });
    });


//Profiel: /user/profiel
router.get('/profiel', passport.authenticate('jwt', {session:false}), (req, res) => {
    console.log("***routes/user/profiel");
    console.log("user waarvan het profiel genomen wordt: " + req.user);
    return res.json({user: req.user});
});

module.exports = router;