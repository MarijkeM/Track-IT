/*const mongoose = require("mongoose");
mongoose.set("debug",true);//op true zetten voor debuggen
//je kan ook je eigen debug code schrijven:
/*
 mongoose.set('debug', function (coll, method, query, doc [, options]) {
 //do your thing
 });
 */

/*offline modus
 module.exports = {
 database:'mongodb://localhost:27017/meancvs',//de naam van de database in mongo
 secret:'secvsret'
 }
 */
module.exports = {
    database:'mongodb://admin:adminCVS@ds247407.mlab.com:47407/meancvs',//de naam van de database in mongo
    secret:'secvsret'//voor passport nodig
}