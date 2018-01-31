/**
 * Created by Marijke on 30/01/2018.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Schema = mongoose.Schema;

//Gebruiker schema
const FreightSchema = new Schema({
    driverId: {type: String, required: true},
    truckId: {type: String, required: true},
    orderIds: [{type: String, required: true}],
    trailerId: {type: String, required: true},
});

//Gebruiker exporteren de 'Freight' gaat de naam zijn in de db
const Freight = module.exports = mongoose.model('Freight', FreightSchema);

module.exports.getAllFreights = () => {
    return Freight.find();
}

module.exports.getFreightById = (freightId) => {
    query = {_id: freightId};
    return Freight.findById(query);
}

module.exports.getFreightsByTruckNumber = (truckNumber) => {
    console.log("*model getFreightByTruckNumber");
    const query = {truckNumber: truckNumber};
    return Freight.find(query);
}

module.exports.getFreightsByDriverId = (driverId) => {
    console.log("*model getFreightByDriverId");
    const query = {driverId: driverId};
    return Freight.find(query);
}

module.exports.getFreightsByOrderId = (orderId) => {
    console.log("*model getFreightByorderId");
    const query = {orderIds: orderId};
    return Freight.find(query);
}

module.exports.addFreight = (newFreight) => {
    try {
        return (new Freight(newFreight)).save();
    } catch (e) {
        return e;
    }
}

module.exports.cancelFreight = (freightId) => {
    var query = {_id: freightId};
    try{
        console.log("try");
        return Freight.remove(query);
    }catch (e){
        return e;
    }
}

module.exports.updateFreight = (freightId, newFreight) => {
    var query = {_id:freightId};
    return Freight.findOneAndUpdate(query, newFreight);
}




