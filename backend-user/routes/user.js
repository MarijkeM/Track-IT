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
router.post('/registreren', async(req, res) => {
        console.log("***routes/user registreren");

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
                            msg: "Registreren gelukt"
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Registreren mislukt, verkeerde rol"
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
                    msg: "Gebruiker bestaat al"
                })
            }
        }
        catch
            (e) {
            res.json({
                success: false,
                msg: 'User toevoegen mislukt: ' + e
            });
        }
    }
)
;


//Authenticatie/inloggen: /user/authenticeren
router.post('/authenticeren', async(req, res) => {
    //als persoon inlogt, geeft die de volgende gegevens door
    const email = req.body.email;
    const password = req.body.password;

    console.log("***routes/user authenticeren");

    //nakijken of de user bestaat
    try {
        user = await User.getUserByEmail(email);
        console.log(user.email);
        if (user == null) {
            return res.json({
                success: false,
                msg: 'Gebruiker niet gevonden'
            })
        }
    } catch (e) {
        return res.json({
            success: false,
            msg: 'Gebruiker niet gevonden'
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
                msg: 'Je bent ingelogd.'
            });
        } else {
            return res.json({success: false, msg: 'Verkeerd paswoord'});
        }
    });
});


//Profiel: /user/profiel
router.get('/profiel', passport.authenticate('jwt', {session: false}), (req, res) => {
    console.log("***routes/user/profiel");
    console.log("user waarvan het profiel genomen wordt: " + req.user);
    return res.json({user: req.user});
});

//user wijzigen: /user/modifyUser/id
router.put('/modifyUser/:id', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/user/modifyUser/" + req.params.id);
    const userId = req.params.id;

    let updateUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role,
    });

    console.log("nieuwe user: " + JSON.stringify(updateUser));

    try {
        var user = await User.getUserById(userId);
        console.log("modify user: " + user);

        if(user == null){
            res.json({
                success: false,
                msg: 'User bestaat niet'
            });
            /*}else if(update.user.toString() !=(req.user._id).toString()){
                res.json({
                    success: false,
                    msg: 'Je kan de vracht niet aanpassen: '
                });*/
        }else{
            await User.updateUser(userId, updateUser);

            res.json({
                success: true,
                msg: 'User updaten is gelukt'
            })
        }
    } catch (e) {
        res.json({
            success: false,
            msg: 'User updaten is mislukt: ' + e});
    }
});

//user verwijderen: /user/cancelUser/id
router.delete('/cancelUser/:id', /*passport.authenticate('jwt', {session:false}),*/ async (req, res) => {
    console.log("***routes/user/cancelUser/id");
    console.log("id: " + req.params.id);
    const userId = req.params.id;

    try{
        user = await User.getUserById(userId);
        console.log("user: " + JSON.stringify(user));

        if(user == null) {
            res.json({
                success: false,
                msg: "User doesn't exist"
            });

            /*} else if(freight.user != req.user._id.toString()){
                let user1 = freight.user;
                let user2 = req.user._id;
                res.json({
                    success: false,
                    msg: 'Dit is niet jou vracht: '
                });
    */
        }else{
            await User.cancelFreight(userId);
            res.json({
                success: true,
                msg: 'User is canceled'
            });
        }

    }catch(e){
        res.json({
            success: false,
            msg: 'Canceling User not succeeded'
        });
    }
});

module.exports = router;