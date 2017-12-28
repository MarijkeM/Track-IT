/**
 * Created by Marijke on 28/12/2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {type:String, required:true},
    estimatedTime: Number,
    realTime: Number
});
