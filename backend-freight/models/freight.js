/**
 * Created by Marijke on 30/01/2018.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Schema = mongoose.Schema;

//Gebruiker schema
const FreightSchema = new Schema({
    driverId: {type: String, required: false},
    truckNumber: {type: String, required: true},
    orderId: [{type: String, required: true}],
});

//Gebruiker exporteren de 'Freight' gaat de naam zijn in de db
const Freight = module.exports = mongoose.model('Freight', FreightSchema);

module.exports.getAllFreights = function () {
    return Freight.find();
}

module.exports.getFreightById = function (id, callback) {
    Freight.findById(id, callback);
}

module.exports.getFreightsByTruckNumber = function (truckNumber) {
    console.log("*model getFreightByTruckNumber");
    const query = {truckNumber: truckNumber};
    return Freight.find(query);
}

module.exports.getFreightsByDriverId = function (driverId) {
    console.log("*model getFreightByDriverId");
    const query = {driverId: driverId};
    return Freight.find(query);
}

module.exports.getFreightsByOrderId = function (orderId) {
    console.log("*model getFreightByorderId");
    const query = {orderId: orderId};
    return Freight.find(query);
}

module.exports.addFreight = function (newFreight) {
    try {
        return (new Freight(newFreight)).save();
    } catch (e) {
        return e;
    }
}

module.exports.cancelFreight = (freightId) => {
    var query = {_id: freightId};
    try{
        return Freight.remove(query);
    }catch (e){
        return e;
    }
}




