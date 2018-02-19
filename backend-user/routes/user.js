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
router.post('/register', async(req, res) => {
        console.log("***routes/user/register");

        let newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
    })
        try {
            var user = await
                User.getUserByEmail(newUser.email);
            console.log(user);
            if (!user) {
                var message;
                message = await
                    User.addUser(newUser);

                if (message == 1) {
                    user = await
                        User.getUserByEmail(newUser.email);
                    if (user) {
                        res.json({
                            success: true,
                            msg: "Registration successful"
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Error, please try again"
                        })
                    }
                }
                else {
                    res.json({
                        success: false,
                        msg: message
                    })
                }
            } else {
                res.json({
                    success: false,
                    msg: "User already exists"
                })
            }
        }
        catch
            (e) {
            res.json({
                success: false,
                msg: 'Adding freight failed: ' + e
            });
        }
    }
)
;


//Authenticatie/inloggen: /user/authenticeren
router.post('/authenticate', async(req, res) => {
    //als persoon inlogt, geeft die de volgende gegevens door
    const email = req.body.email;
    const password = req.body.password;

    console.log("***routes/user/authenticate");

    //nakijken of de user bestaat
    try {
        user = await User.getUserByEmail(email);
        console.log(user.email);
        if (user == null) {
            return res.json({
                success: false,
                msg: 'User not found'
            })
        }
    } catch (e) {
        return res.json({
            success: false,
            msg: 'User not found'
        })
    }

    //nakijken of paswoord klopt
    User.comparePassword(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
            //we maken een token die een week geldig is
            const token = jwt.sign({data: user}, config.secret, {
                expiresIn: 604800 //1 week in seconden

            });

            //wat we gaan terugsturen naar de frontend
            return res.json({
                success: true,
                token: 'JWT ' + token,
                user: {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role
                },
                msg: "You're not logged in"
            });
        } else {
            return res.json({success: false, msg: 'Wrong password'});
        }
    });
});


//Profiel: /user/profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log("***routes/user/profile");
    console.log("user profile: " + req.user);
    return res.json({user: req.user});
});

module.exports = router;