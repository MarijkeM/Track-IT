const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');

module.exports = function (passport) {
    let options = {};

    //er zijn verschillende manieren om een token heen en weer te sturen
    //maar ik gebruik hier de AuthHeader
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    //secret van de config/database.js
    options.secretOrKey = config.secret;
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        User.getUserById(jwt_payload.data._id, (err, user) => {
            if(err){
                return done(err, false);
            }

            if(user){
                return done(null, user);
            }else {
                return done(null, false)
            }
        })
    }))
}

