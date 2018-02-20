const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Schema = mongoose.Schema;

//Gebruiker schema
const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    role: {type: String, enum: ['client', 'driver', 'admin'], default: 'client'}
});

UserSchema.statics.getAllUsers = function () {
    return User.find();
};

UserSchema.statics.getUserById = function (userId, callback) {
    query = {_id: userId};
    return User.findById(query, callback);
}


UserSchema.statics.getUserByEmail = function (email) {
    console.log("getUserByEmail");
    const query = {email: email};
    return User.findOne(query);
}

UserSchema.statics.addUser = function (newUser) {
    try {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save();
                console.log(newUser.email);
            });
        });
        return 1;

    } catch (e) {
        return e;
    }
}

UserSchema.statics.comparePassword = function (opgegevenPaswoord, hashedPaswoord, callback) {
    //je geeft een err en een res en hier heet dat err en isMatch, dat had ook pipo kunnen heten
    //maar als res(ultaat) geeft compare true of false terug
    bcrypt.compare(opgegevenPaswoord, hashedPaswoord, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    })
}

UserSchema.statics.cancelUser = (userId) => {
    var query = {_id: userId};
    try{
        return User.remove(query);
    }catch (e){
        return e;
    }
}

UserSchema.statics.updateUser = (userId, updatedUser) => {
    var query = {_id:userId};
    return User.findOneAndUpdate(query, updatedUser)
}

const User = module.exports = mongoose.model('User', UserSchema);