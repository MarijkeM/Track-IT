/**
 * Created by Marijke on 31/01/2018.
 */

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Freight = require('../models/freight');
const User = require('../models/user');


//alle vrachten van 1 persoon ophalen: /freight/allFreights
router.get('/allFreights'/*, passport.authenticate('jwt', {session:false})*/, async (req, res) => {
    console.log("***routes/freight/allfreights");

    try{
        freights = await Freight.getAllFreights();
        res.json(freights);
    } catch (error){
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Freights niet gevonden: ' + error
        });
    }
});

//alle vrachten van 1 persoon ophalen: /freight/allFreights
router.get('/allFreightsTodo', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/taks/allfreights freights van bepaalde user");

    try{
        freights = await Freight.getFreightsTodo(req.user);
        res.json(freights);
    } catch (error){
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Freights niet gevonden: ' + error
        });
    }
});

//alle vrachten van 1 persoon ophalen: /freight/allFreights
router.get('/allFreightsDone', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/taks/allfreights vrachten van bepaalde user");

    try{
        freights = await Freight.getFreightsDone(req.user);
        res.json(freights);
    } catch (error){
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Freights niet gevonden: ' + error
        });
    }
});


//vracht toevoegen: /freight/vrachtToevoegen
router.post('/vrachtToevoegen', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/freight vracht toevoegen");
    var statusBody = "";
    var deadline = "";

    if(!req.body.dateDeadline){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        today = mm + '/' + dd + '/' + yyyy;
        deadline = new Date(today);

    }else{
        deadline = req.body.dateDeadline;
    }

    if(req.body.status){
        statusBody = req.body.status;

        if(statusBody.toString() !== "Todo" && statusBody.toString() !== "Done" ){
            statusBody = "Todo";
        }
    }else{
        statusBody = "Todo"
    }

    let newFreight = new Freight({
        title: req.body.title,
        estimatedTime: req.body.estimatedTime,
        user: req.user,
        status: statusBody,
        dateDeadline: deadline,
        priority:req.body.priority
    });

    try {
        await Freight.addFreight(newFreight);

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

//vracht wijzigen: /freight/vrachtWijzigen/id
router.put('/vrachtWijzigen/:id', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/freight/vrachtWijzigen/" + req.params.id);
    const freightId = req.params.id;

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
    console.log("nieuwe vracht: " + JSON.stringify(update));
    console.log("req.user._id: " + JSON.stringify(req.user._id));
    /*console.log("users komen overeen is " + (JSON.stringify(freight.user) === JSON.stringify(req.user._id)));
     */

    try {
        var freight = await Freight.findFreightById(freightId);

        if(freight == null){
            res.json({
                success: false,
                msg: 'Taak bestaat niet'
            });
        }else if(update.user.toString() !=(req.user._id).toString()){

            res.json({
                success: false,
                msg: 'Je kan de vracht niet aanpassen: '
            });
        }else{
            await Freight.updateFreight(freightId, update);

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

//vracht verwijderen: /freight/vrachtVerwijderen/id
router.delete('/vrachtVerwijderen/:id', passport.authenticate('jwt', {session:false}), async (req, res) => {
    console.log("***routes/freight/vrachtVerwijderen/id vracht verwijderen");
    console.log("id: " + req.params.id);
    const freightId = req.params.id;

    try{
        freight = await Freight.findFreightById({_id: freightId});
        console.log("vracht: " + JSON.stringify(freight));

        if(freight == null) {
            res.json({
                success: false,
                msg: 'Taak bestaat niet'
            });

        } else if(freight.user != req.user._id.toString()){
            let user1 = freight.user;
            let user2 = req.user._id;
            res.json({
                success: false,
                msg: 'Dit is niet jou vracht: '
            });

        }else{
            await Freight.deleteFreight(freightId, req.user);
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