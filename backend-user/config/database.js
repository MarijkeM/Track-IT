const mongoose = require("mongoose");
mongoose.set("debug",true);//op true zetten voor debuggen
//je kan ook je eigen debug code schrijven:
/*
 mongoose.set('debug', function (coll, method, query, doc [, options]) {
 //do your thing
 });


/*offline modus
 module.exports = {
 database:'mongodb://localhost:27017/trackit',//de naam van de database in mongo
 secret:'secvsret'
 }*/


module.exports = {
    database:'mongodb://TrackIT:Agilians@ds213118.mlab.com:13118/user_management',//de naam van de database in mongo
    secret:'fPQXkacYu6s89Di4VPOZKZx7lXxHdwqjUNe4yihZ9xn2pDrByrreLYBdElXqRtc'//voor passport nodig
}