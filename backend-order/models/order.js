const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Gebruiker schema
const UserSchema = new Schema({
    afzenderNaam:{type:String, required:false},
    afzenderStraat:{type:String, required:false},
    afzenderStad:{type:String, required:false},
    afzenderLand:{type:String, required:false},
    ontvangerNaam:{type:String, required:false},
    ontvangerStraat:{type:String, required:false},
    ontvangerStad:{type:String, required:false},
    ontvangerPostcode:{type:String, required:false},
    ontvangerLand:{type:String, required:false},
    plaatsBestemdOntvangstStad:{type:String, required:false},
    plaatsBestemdOntvangstLand:{type:String, required:false},
    plaatsOntvangstStad:{type:String, required:false},
    plaatsOntvangstLand:{type:String, required:false},
    plaatsOntvangstDatum:{type:String, required:false},
    aantalBijgevoegdeDocumenten:{type:String, required:false},
    merkenNummers:{type:String, required:false},
    aantalVerpakking:{type:String, required:false},
    typePallet:{type:String, required:false},
    wijzeVerpakking:{type:String, required:false},
    aardDerGoederen:{type:String, required:false},
    statistischNummer:{type:String, required:false},
    brutoGewicht:{type:String, required:false},
    volume:{type:String, required:false},
    merkenNummers1:{type:String, required:false},
    aantalVerpakking1:{type:String, required:false},
    typePallet1:{type:String, required:false},
    wijzeVerpakking1:{type:String, required:false},
    aardDerGoederen1:{type:String, required:false},
    statistischNummer1:{type:String, required:false},
    brutoGewicht1:{type:String, required:false},
    volume1:{type:String, required:false},
    merkenNummers2:{type:String, required:false},
    aantalVerpakking2:{type:String, required:false},
    typePallet2:{type:String, required:false},
    wijzeVerpakking2:{type:String, required:false},
    aardDerGoederen2:{type:String, required:false},
    statistischNummer2:{type:String, required:false},
    brutoGewicht2:{type:String, required:false},
    volume2:{type:String, required:false},
    instructiesAfzender:{type:String, required:false},
    frankeringsvoorschrift:{type:String, required:false},
    vervoederNaam:{type:String, required:false},
    vervoederStraat:{type:String, required:false},
    vervoederStad:{type:String, required:false},
    vervoederPostcode:{type:String, required:false},
    vervoederLand:{type:String, required:false},
    opvolgendeVervoederNaam:{type:String, required:false},
    opvolgendeVervoederStraat:{type:String, required:false},
    opvolgendeVervoederStad:{type:String, required:false},
    opvolgendeVervoederPostcode:{type:String, required:false},
    opvolgendeVervoederLand:{type:String, required:false},
    opmerkingenVervoerder:{type:String, required:false},
    specialeOvereenkomst:{type:String, required:false},
    opgemaaktPlaats:{type:String, required:false},
    opgemaaktDatum:{type:String, required:false},
});

//Gebruiker exporteren de 'Order' gaat de naam zijn in de db
const Order = module.exports = mongoose.model('Order', UserSchema);

module.exports.getOrderById = function(id, callback){
    Order.findById(id, callback);
}

module.exports.getAllOrders = function () {
    console.log("***models/order/getAllOrders");
    return Order.find();
};