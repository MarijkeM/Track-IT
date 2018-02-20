/**
 * Created by Marijke on 31/01/2018.
 */

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Tracking = require('../models/tracking')


//alle vrachten van 1 persoon ophalen: /tracking/allTrackings
router.get('/allTrackings', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/tracking/alltrackings");

    try {
        let trackings = await Tracking.getAllTrackings();
        res.json(trackings);
    } catch (error) {
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Trackings not found: ' + error
        });
    }
});

//alle vrachten van 1 persoon ophalen: /tracking/allTrackingsforTracking/:freightId
router.get('/trackingById/:id', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/tracking/trackingbyId/" + req.params.id + " tracking");

    try {
        let id = req.params.id;
        let tracking = await Tracking.findById(id);

        if(tracking){
            res.json(tracking);
        }else{
            res.json({
                success: false,
                msg: 'Tracking not found'
            });
        }

    } catch (error) {
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Tracking not found'
        });
    }
});

//alle vrachten van 1 persoon ophalen: /tracking/allTrackingsforTracking/:freightId
router.get('/getTrackingByFreightId/:freightId', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/tracking/trackingforFreight/:freightId trackings van bepaalde order");

    try {
        trackings = await Tracking.getTrackingByFreightId(req.params.freightId);
        res.json(trackings);
    } catch (error) {
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Tracking not found'
        });
    }
});


//vracht toevoegen: /tracking/vrachtToevoegen
router.post('/addTracking', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/tracking/addTracking");
    let newTracking = new Tracking({});

    try {
        newTracking.set(req.body);

        console.log("Tracking: " + newTracking);
        await Tracking.addTracking(newTracking);

        res.json({
            success: true,
            msg: "Let's start tracking!"
        })
    } catch (e) {
        console.log("error: " + e);
        res.json({
            success: false,
            msg: 'This freight is already tracked or something else went wrong '
        });
    }
});

//tracking wijzigen: /tracking/updateTracking/id
router.put('/updateTracking/:id'/*, passport.authenticate('jwt', {session:false})*/, async(req, res) => {
    console.log("***routes/tracking/updateTracking/" + req.params.id);
    const trackingId = req.params.id;

    try {
        let tracking = await Tracking.findById(trackingId);
        tracking.set(req.body);
        await tracking.save();
        res.json({
            success: true,
            msg: 'Update of tracking succeeded'
        })
    } catch (e) {
        console.log("error: " + e);
        res.json({
            success: false,
            msg: "Update of tracking failed"
        });
    }
});


//vracht verwijderen: /tracking/deleteTracking/id
router.delete('/deleteTracking/:id', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/tracking/deleteTracking/id");
    const trackingId = req.params.id;
    console.log("id: " + trackingId);


    try {
        tracking = await Tracking.findById(trackingId);
        console.log("tracking: " + JSON.stringify(tracking));

        if (tracking == null) {
            res.json({
                success: false,
                msg: "Tracking doesn't exist"
            });

        } else {
            await Tracking.deleteTracking(trackingId);
            res.json({
                success: true,
                msg: 'Tracking is successfully deleted'
            });
        }

    } catch (e) {
        console.log("error: " + e)
        res.json({
            success: false,
            msg: 'Deleting tracking failed'
        });
    }
});

//vracht verwijderen: /tracking/deleteTrackingByFreightId/id
router.delete('/deleteTrackingByFreightId/:id', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/tracking/deleteTrackingByFreightId/id");
    const freightId = req.params.id;
    console.log("freightId: " + freightId);


    try {
        tracking = await Tracking.getTrackingByFreightId(freightId);
        console.log("tracking: " + JSON.stringify(tracking));

        if (tracking == null) {
            res.json({
                success: false,
                msg: "Tracking doesn't exist"
            });

        } else {
            await Tracking.deleteTracking(freightId);
            res.json({
                success: true,
                msg: 'Tracking is successfully deleted'
            });
        }

    } catch (e) {
        console.log("error: " + e)
        res.json({
            success: false,
            msg: 'Could not delete tracking'
        });
    }
});

module.exports = router;