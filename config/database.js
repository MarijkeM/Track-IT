const mongoose = require("mongoose");
mongoose.set("debug",false);//op true zetten voor debuggen
//je kan ook je eigen debug code schrijven:
/*
 mongoose.set('debug', function (coll, method, query, doc [, options]) {
 //do your thing
 });
 */


module.exports = {
    database:'mongodb://localhost:27017/meancvs',//de naam van de database in mongo
    secret:'secvsret'
}