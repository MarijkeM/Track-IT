/**
 * Created by Arne on 29/01/2018.
 */
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Order = require('../models/order');


//Order: /order/getAllOrders
router.get('/getAllOrders', async (req, res) => {
    console.log("***routes/order/getAllOrders");
    try {
        orders = await Order.getAllOrders();
        if (orders == null) {
            console.log("Geen orders gevonden");
            return res.json({
                success: false,
                msg: 'Geen orders gevonden'
            })
        }
    } catch (e) {
        console.log("e: " + e);
        return res.json({
            success: false,
            msg: e
        })
    }
    console.log("Orders gevonden");
    console.log(orders);
    return res.json(orders);
});

//order by id zoeken: /order/orderById/:orderId
router.get('/orderById/:orderId', /*passport.authenticate('jwt', {session:false}),*/ async (req, res) => {
    console.log("***routes/order/orderById");

    try {
        order = await Order.getOrderById(req.params.orderId);
        res.json(order);
    } catch (error) {
        console.log("error: " + error);
        res.json({
            success: false,
            msg: 'Order niet gevonden: ' + error
        });
    }
});

//order toevoegen: /order/addOrder
router.post('/addOrder', /*passport.authenticate('jwt', {session:false}),*/ async (req, res) => {
    console.log("***routes/order/addOrder");

    let newOrder = new Order({
        DriverId: req.body.driverId,
        TruckId: req.body.truckId,
        TrailerId: req.body.trailerId,
        AfzenderNaam: req.body.afzenderNaam,
        AfzenderStraat: req.body.afzenderStraat,
        AfzenderStad: req.body.afzenderStad,
        AfzenderLand: req.body.afzenderLand,
        OntvangerNaam: req.body.ontvangerNaam,
        OntvangerStraat: req.body.ontvangerStraat,
        OntvangerStad: req.body.ontvangerStad,
        OntvangerPostcode: req.body.ontvangerPostcode,
        OntvangerLand: req.body.ontvangerLand,
        PlaatsBestemdOntvangstStad: req.body.plaatsBestemdOntvangstStad,
        PlaatsBestemdOntvangstLand: req.body.plaatsBestemdOntvangstLand,
        PlaatsOntvangstStad: req.body.plaatsOntvangstStad,
        PlaatsOntvangstLand: req.body.plaatsOntvangstLand,
        PlaatsOntvangstDatum: req.body.plaatsOntvangstDatum,
        AantalBijgevoegdeDocumenten: req.body.aantalBijgevoegdeDocumenten,
        MerkenNummers: req.body.merkenNummers,
        AantalVerpakking: req.body.aantalVerpakking,
        TypePallet: req.body.typePallet,
        WijzeVerpakking: req.body.wijzeVerpakking,
        AardDerGoederen: req.body.aardDerGoederen,
        StatistischNummer: req.body.statistischNummer,
        BrutoGewicht: req.body.brutoGewicht,
        Volume: req.body.volume,
        MerkenNummers1: req.body.merkenNummers1,
        AantalVerpakking1: req.body.aantalVerpakking1,
        TypePallet1: req.body.typePallet1,
        WijzeVerpakking1: req.body.wijzeVerpakking1,
        AardDerGoederen1: req.body.aardDerGoederen1,
        StatistischNummer1: req.body.statistischNummer1,
        BrutoGewicht1: req.body.brutoGewicht1,
        Volume1: req.body.volume1,
        MerkenNummers2: req.body.merkenNummers2,
        AantalVerpakking2: req.body.aantalVerpakking2,
        TypePallet2: req.body.typePallet2,
        WijzeVerpakking2: req.body.wijzeVerpakking2,
        AardDerGoederen2: req.body.aardDerGoederen2,
        StatistischNummer2: req.body.statistischNummer2,
        BrutoGewicht2: req.body.brutoGewicht2,
        Volume2: req.body.volume2,
        InstructiesAfzender: req.body.instructiesAfzender,
        Frankeringsvoorschrift: req.body.frankeringsvoorschrift,
        VervoederNaam: req.body.vervoederNaam,
        VervoederStraat: req.body.vervoederStraat,
        VervoederStad: req.body.vervoederStad,
        VervoederPostcode: req.body.vervoederPostcode,
        VervoederLand: req.body.vervoederLand,
        OpvolgendeVervoederNaam: req.body.opvolgendeVervoederNaam,
        OpvolgendeVervoederStraat: req.body.opvolgendeVervoederStraat,
        OpvolgendeVervoederStad: req.body.opvolgendeVervoederStad,
        OpvolgendeVervoederPostcode: req.body.opvolgendeVervoederPostcode,
        OpvolgendeVervoederLand: req.body.opvolgendeVervoederLand,
        OpmerkingenVervoerder: req.body.opmerkingenVervoerder,
        SpecialeOvereenkomst: req.body.specialeOvereenkomst,
        OpgemaaktPlaats: req.body.opgemaaktPlaats,
        OpgemaaktDatum: req.body.opgemaaktDatum,
    });

    console.log("order: " + newOrder);
    try {
        await Order.addOrder(newOrder);

        res.json({
            success: true,
            msg: 'Order is ready!'
        })
    } catch (e) {
        res.json({
            success: false,
            msg: 'Adding order failed, please try again: ' + e
        });
    }
});

//order wijzigen: /order/modifyOrder/id
router.put('/modifyOrder/:id', /*passport.authenticate('jwt', {session:false}),*/ async (req, res) => {
        console.log("***routes/order/modifyOrder/" + req.params.id);
        const orderId = req.params.id;

        let updateOrder = Order({
            DriverId: req.body.driverId,
            TruckId: req.body.truckId,
            TrailerId: req.body.trailerId,
            AfzenderNaam: req.body.afzenderNaam,
            AfzenderStraat: req.body.afzenderStraat,
            AfzenderStad: req.body.afzenderStad,
            AfzenderLand: req.body.afzenderLand,
            OntvangerNaam: req.body.ontvangerNaam,
            OntvangerStraat: req.body.ontvangerStraat,
            OntvangerStad: req.body.ontvangerStad,
            OntvangerPostcode: req.body.ontvangerPostcode,
            OntvangerLand: req.body.ontvangerLand,
            PlaatsBestemdOntvangstStad: req.body.plaatsBestemdOntvangstStad,
            PlaatsBestemdOntvangstLand: req.body.plaatsBestemdOntvangstLand,
            PlaatsOntvangstStad: req.body.plaatsOntvangstStad,
            PlaatsOntvangstLand: req.body.plaatsOntvangstLand,
            PlaatsOntvangstDatum: req.body.plaatsOntvangstDatum,
            AantalBijgevoegdeDocumenten: req.body.aantalBijgevoegdeDocumenten,
            MerkenNummers: req.body.merkenNummers,
            AantalVerpakking: req.body.aantalVerpakking,
            TypePallet: req.body.typePallet,
            WijzeVerpakking: req.body.wijzeVerpakking,
            AardDerGoederen: req.body.aardDerGoederen,
            StatistischNummer: req.body.statistischNummer,
            BrutoGewicht: req.body.brutoGewicht,
            Volume: req.body.volume,
            MerkenNummers1: req.body.merkenNummers1,
            AantalVerpakking1: req.body.aantalVerpakking1,
            TypePallet1: req.body.typePallet1,
            WijzeVerpakking1: req.body.wijzeVerpakking1,
            AardDerGoederen1: req.body.aardDerGoederen1,
            StatistischNummer1: req.body.statistischNummer1,
            BrutoGewicht1: req.body.brutoGewicht1,
            Volume1: req.body.volume1,
            MerkenNummers2: req.body.merkenNummers2,
            AantalVerpakking2: req.body.aantalVerpakking2,
            TypePallet2: req.body.typePallet2,
            WijzeVerpakking2: req.body.wijzeVerpakking2,
            AardDerGoederen2: req.body.aardDerGoederen2,
            StatistischNummer2: req.body.statistischNummer2,
            BrutoGewicht2: req.body.brutoGewicht2,
            Volume2: req.body.volume2,
            InstructiesAfzender: req.body.instructiesAfzender,
            Frankeringsvoorschrift: req.body.frankeringsvoorschrift,
            VervoederNaam: req.body.vervoederNaam,
            VervoederStraat: req.body.vervoederStraat,
            VervoederStad: req.body.vervoederStad,
            VervoederPostcode: req.body.vervoederPostcode,
            VervoederLand: req.body.vervoederLand,
            OpvolgendeVervoederNaam: req.body.opvolgendeVervoederNaam,
            OpvolgendeVervoederStraat: req.body.opvolgendeVervoederStraat,
            OpvolgendeVervoederStad: req.body.opvolgendeVervoederStad,
            OpvolgendeVervoederPostcode: req.body.opvolgendeVervoederPostcode,
            OpvolgendeVervoederLand: req.body.opvolgendeVervoederLand,
            OpmerkingenVervoerder: req.body.opmerkingenVervoerder,
            SpecialeOvereenkomst: req.body.specialeOvereenkomst,
            OpgemaaktPlaats: req.body.opgemaaktPlaats,
            OpgemaaktDatum: req.body.opgemaaktDatum,
        });

        console.log("nieuwe order: " + JSON.stringify(order));

        try {
            var order = await Order.getOrderById(orderId);

            if (order == null) {
                res.json({
                    success: false,
                    msg: 'Order bestaat niet'
                });
            } else {
                await Order.updateOrder(orderId, updateOrder);

                res.json({
                    success: true,
                    msg: 'Order updaten is gelukt'
                })
            }
        } catch (e) {
            res.json({
                success: false,
                msg: 'Order updaten is mislukt: ' + e
            });
        }
});

//order verwijderen: /order/cancelOrder/id
router.delete('/cancelOrder/:id', /*passport.authenticate('jwt', {session:false}),*/ async (req, res) => {
    console.log("***routes/order/cancelOrder/id");
    console.log("id: " + req.params.id);
    const orderId = req.params.id;

    try {
        order = await Order.getOrderById(orderId);
        console.log("order: " + JSON.stringify(order));

        if (order == null) {
            res.json({
                success: false,
                msg: "Order doesn't exist"
            });
        } else {
            await Order.cancelOrder(orderId);
            res.json({
                success: true,
                msg: 'Order is canceled'
            });
        }

    } catch (e) {
        res.json({
            success: false,
            msg: 'Canceling order not succeeded'
        });
    }
});

module.exports = router;