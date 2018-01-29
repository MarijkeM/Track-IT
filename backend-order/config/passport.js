const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../backend-user/models/user');
const config = require('../../backend-user/config/database');

module.exports = function (passport) {
    let options = {};

    options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    options.secretOrKey = config.secret; //secret van de config/database.js

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

