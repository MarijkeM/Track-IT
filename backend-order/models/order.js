const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Order schema
const OrderSchema = new Schema({
    AfzenderNaam:{type:String, required:false},
    AfzenderStraat:{type:String, required:false},
    AfzenderStad:{type:String, required:false},
    AfzenderLand:{type:String, required:false},
    OntvangerNaam:{type:String, required:false},
    OntvangerStraat:{type:String, required:false},
    OntvangerStad:{type:String, required:false},
    OntvangerPostcode:{type:String, required:false},
    OntvangerLand:{type:String, required:false},
    PlaatsBestemdOntvangstStad:{type:String, required:false},
    PlaatsBestemdOntvangstLand:{type:String, required:false},
    PlaatsOntvangstStad:{type:String, required:false},
    PlaatsOntvangstLand:{type:String, required:false},
    PlaatsOntvangstDatum:{type:String, required:false},
    AantalBijgevoegdeDocumenten:{type:String, required:false},
    MerkenNummers:{type:String, required:false},
    AantalVerpakking:{type:String, required:false},
    TypePallet:{type:String, required:false},
    WijzeVerpakking:{type:String, required:false},
    AardDerGoederen:{type:String, required:false},
    StatistischNummer:{type:String, required:false},
    BrutoGewicht:{type:String, required:false},
    Volume:{type:String, required:false},
    MerkenNummers1:{type:String, required:false},
    AantalVerpakking1:{type:String, required:false},
    TypePallet1:{type:String, required:false},
    WijzeVerpakking1:{type:String, required:false},
    AardDerGoederen1:{type:String, required:false},
    StatistischNummer1:{type:String, required:false},
    BrutoGewicht1:{type:String, required:false},
    Volume1:{type:String, required:false},
    MerkenNummers2:{type:String, required:false},
    AantalVerpakking2:{type:String, required:false},
    TypePallet2:{type:String, required:false},
    WijzeVerpakking2:{type:String, required:false},
    AardDerGoederen2:{type:String, required:false},
    StatistischNummer2:{type:String, required:false},
    BrutoGewicht2:{type:String, required:false},
    Volume2:{type:String, required:false},
    InstructiesAfzender:{type:String, required:false},
    Frankeringsvoorschrift:{type:String, required:false},
    VervoederNaam:{type:String, required:false},
    VervoederStraat:{type:String, required:false},
    VervoederStad:{type:String, required:false},
    VervoederPostcode:{type:String, required:false},
    VervoederLand:{type:String, required:false},
    OpvolgendeVervoederNaam:{type:String, required:false},
    OpvolgendeVervoederStraat:{type:String, required:false},
    OpvolgendeVervoederStad:{type:String, required:false},
    OpvolgendeVervoederPostcode:{type:String, required:false},
    OpvolgendeVervoederLand:{type:String, required:false},
    OpmerkingenVervoerder:{type:String, required:false},
    SpecialeOvereenkomst:{type:String, required:false},
    OpgemaaktPlaats:{type:String, required:false},
    OpgemaaktDatum:{type:String, required:false},
});


OrderSchema.statics.getAllOrders = function () {
    console.log("***models/order/getAllOrders");
    return Order.find();
};

OrderSchema.statics.cancelOrder = (orderId) => {
    var query = {_id: orderId};
    try{
        console.log("try");
        return Order.remove(query);
    }catch (e){
        return e;
    }
}

OrderSchema.statics.updateOrder = (orderId, updatedOrder) => {
    var query = {_id:orderId};
    return Order.findOneAndUpdate(query, updatedOrder)
}


const Order = module.exports = mongoose.model('Order', OrderSchema);