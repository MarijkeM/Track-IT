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
    } catch (e) {
        errorResponse(res, e, 'Trackings not found')
    }
});

//alle vrachten van 1 persoon ophalen: /tracking/allTrackingsforTracking/:freightId
router.get('/trackingById/:id', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/tracking/trackingbyId/" + req.params.id + " tracking");
    let tracking = new Tracking();

    try {
        let id = req.params.id;
        tracking = await Tracking.findById(id);

        if (tracking) {
            res.json(tracking);
        } else {
            errorResponse(res, 'Tracking not found', 'Tracking not found')
        }

    } catch (e) {
        console.log("tracking:" + tracking)
        errorResponse(res, e, 'Tracking not found')
    }
});

//alle vrachten van 1 persoon ophalen: /tracking/allTrackingsforTracking/:freightId
router.get('/getTrackingByFreightId/:freightId', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/tracking/trackingforFreight/:freightId trackings van bepaalde order");

    try {
        trackings = await Tracking.getTrackingByFreightId(req.params.freightId);
        res.json(trackings);
    } catch (e) {
        errorResponse(res, e, 'Tracking not found');
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
        successResponse("Let's start tracking!")

    } catch (e) {
        errorResponse(res, e, "This freight is already tracked or something else went wrong.")
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
        successResponse(res, "You're tracking is updated")

    } catch (e) {
        errorResponse(res, e, "Updating tracking failed")
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
            errorResponse(res, "Tracking doesn't exist", "Tracking doesn't exist")

        } else {
            await Tracking.deleteTracking(trackingId);
            successResponse(res, 'Tracking is successfully deleted');
        }

    } catch (e) {
        errorResponse(res, e, "Deleting tracking failed");
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
            errorResponse("Tracking doesn't exist", "Tracking doesn't exist")

        } else {
            await Tracking.deleteTracking(freightId);
            successResponse(res, 'Tracking is successfully deleted')
        }

    } catch (e) {
        errorResponse(res, e, 'Could not delete tracking')
    }
});

function errorResponse(res, error, message) {
    console.log("error: " + error)
    res.json({
        success: false,
        msg: message
    });
}

function successResponse(res, message) {
    res.json({
        success: true,
        msg: message
    });
}

module.exports = router;