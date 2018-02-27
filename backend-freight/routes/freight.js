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
router.get('/allFreights', async (req, res) => {
    console.log("***routes/freight/allfreights");

    try{
        freights = await Freight.getAllFreights();
        res.json(freights);
    } catch (error){
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Freights not found: ' + error
        });
    }
});

//alle vrachten van 1 persoon ophalen: /freight/allFreightsDriver/:driverId
router.get('/allFreightsfromDriver/:driverId', async (req, res) => {
    console.log("***routes/freight/allfreightsfromDriver freights van bepaalde driver");

    try{
        freights = await Freight.getFreightsByDriverId(req.params.driverId);
        res.json(freights);
    } catch (error){
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Freights not found: ' + error
        });
    }
});

//alle vrachten van 1 persoon ophalen: /freight/allFreightsDriver/:driverId
router.get('/allFreightsforOrder/:orderId', async (req, res) => {
    console.log("***routes/taks/allfreights freights van bepaalde udriver");

    try{
        freights = await Freight.getFreightsByOrderId(req.params.orderId);
        res.json(freights);
    } catch (error){
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Freights not found: ' + error
        });
    }
});

//alle vrachten van 1 persoon ophalen: /freight/allFreights
router.get('/allFreightsDone', async (req, res) => {
    console.log("***routes/taks/allfreights vrachten van bepaalde user");

    try{
        freights = await Freight.getFreightsDone(req.user);
        res.json(freights);
    } catch (error){
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Freights not found: ' + error
        });
    }
});


//vracht toevoegen: /freight/vrachtToevoegen
router.post('/addFreight', async (req, res) => {
    console.log("***routes/freight/addFreight");

    let newFreight = new Freight({
        driverId: req.body.driverId,
        truckId: req.body.truckId,
        trailerId:req.body.trailerId,
        orderIds: req.body.orderIds
    });

    console.log("freight: "+newFreight);
    try {
        await Freight.addFreight(newFreight);

        res.json({
            success: true,
            msg: 'Freight is ready!'
        })
    } catch (e) {
        res.json({
            success: false,
            msg: 'Adding freight failed, please try again: ' + e});
    }
});

//vracht wijzigen: /freight/modifyFreight/id
router.put('/modifyFreight/:id', async (req, res) => {
    console.log("***routes/freight/vrachtWijzigen/" + req.params.id);
    const freightId = req.params.id;

    let updateFreight = new Freight({
        driverId: req.body.driverId,
        truckId: req.body.truckId,
        trailerId:req.body.trailerId,
        orderIds: req.body.orderIds
    });

    console.log("New freight: " + JSON.stringify(updateFreight));

    try {
        var freight = await Freight.findFreightById(freightId);

        if(freight == null){
            res.json({
                success: false,
                msg: "Freight doesn't exist"
            });

        }else{
            await Freight.updateFreight(freightId, updateFreight);

            res.json({
                success: true,
                msg: 'Update freight succeeded'
            })
        }
    } catch (e) {
        res.json({
            success: false,
            msg: 'Updating freight failed: ' + e});
    }
});

//vracht verwijderen: /freight/cancelFreight/id
router.delete('/cancelFreight/:id', async (req, res) => {
    console.log("***routes/freight/cancelFreight/id");
    console.log("id: " + req.params.id);
    const freightId = req.params.id;

    try{
        freight = await Freight.getFreightById(freightId);
        console.log("freight: " + JSON.stringify(freight));

        if(freight == null) {
            res.json({
                success: false,
                msg: "Can't find freight"
            });

        }else{
            await Freight.cancelFreight(freightId);
            res.json({
                success: true,
                msg: 'Freight is canceled'
            });
        }

    }catch(e){
        res.json({
            success: false,
            msg: 'Canceling freight failed: ' + e
        });
    }
});

module.exports = router;