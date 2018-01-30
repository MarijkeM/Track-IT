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
    try{
            orders = await Order.getAllOrders();
            if(orders == null){
                console.log("Geen orders gevonden");
                return res.json({
                    success: false,
                    msg: 'Geen orders gevonden'})
        }
    }catch (e){
        console.log("e: " + e);
        return res.json({
            success: false,
            msg: e})
    }
    console.log("Orders gevonden");
    return res.json(orders);
});

module.exports = router;