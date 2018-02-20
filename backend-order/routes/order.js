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
router.get('/getAllOrders', async(req, res) => {
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
router.get('/orderById/:orderId', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
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
router.post('/addOrder', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/order/addOrder");

    try {
        let newOrder = new Order();
        newOrder.set(req.body);
        await newOrder.save();
        res.json({
            success: true,
            msg: 'Order is successfully added'
        })
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            msg: 'Adding order failed, please try again'
        });
    }
});

//order wijzigen: /order/modifyOrder/id
router.put('/modifyOrder/:id', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/order/modifyOrder/" + req.params.id);
    const orderId = req.params.id;

    try {
        let updateOrder = await Order.findById(orderId);

        if (updateOrder) {
            updateOrder.set(req.body);
            await updateOrder.save();
            res.json({
                success: true,
                msg: 'Update order succeeded'
            })
        } else {
            res.json({
                success: false,
                msg: "Order doesn't exist"
            });
        }
    } catch (e) {
        res.json({
            success: false,
            msg: 'Update order failed: ' + e
        });
    }
});

//order verwijderen: /order/cancelOrder/id
router.delete('/cancelOrder/:id', /*passport.authenticate('jwt', {session:false}),*/ async(req, res) => {
    console.log("***routes/order/cancelOrder/id");
    const orderId = req.params.id;

    try {
        order = await Order.findById(orderId);
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