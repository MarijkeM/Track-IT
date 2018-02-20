/**
 * Created by Marijke on 30/01/2018.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Gebruiker schema
const TrackingSchema = new Schema({
    freightId: {type: String, required: true, unique: true},
    latitude: {type: Number},
    longitude: {type: Number},
    time: {type: Date}
});

TrackingSchema.statics.getAllTrackings = () => {
    return Tracking.find();
}

TrackingSchema.statics.getTrackingByFreightId = (freightId) => {
    query = {freightId: freightId};
    return Tracking.find(query);
}

TrackingSchema.statics.addTracking = (newTracking) => {
    try {
        return (new Tracking(newTracking)).save();
    } catch (e) {
        return e;
    }
}

TrackingSchema.statics.deleteTracking = (trackingId) => {
    var query = {_id: trackingId};
    try {
        return Tracking.remove(query);
    } catch (e) {
        return e;
    }
}


//Tracking exporteren de 'Tracking' gaat de naam zijn in de db
const Tracking = module.exports = mongoose.model('Tracking', TrackingSchema);


