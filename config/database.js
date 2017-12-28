const mongoose = require("mongoose");
mongoose.set("debug",false);//op true zetten voor debuggen
module.exports = {
    database:'mongodb://localhost:27017/meancvs',//de naam van de database in mongo
    secret:'secvsret'
}