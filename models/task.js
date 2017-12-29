/**
 * Created by Marijke on 28/12/2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const TaskSchema = new Schema({
    title: {type:String, required:true},
    estimatedTime: Number,
    realTime: Number,
    user: {type: Schema.Types.ObjectId, ref:'User', required:true}
},
    {collection:"task"}
);

const Task = module.exports = mongoose.model('Task', TaskSchema);

module.exports.getTasks = function (user, callback) {
    var query = {user: user._id};
    console.log(JSON.stringify(query));
    Task.find(query, callback);

}

module.exports.addTask = function (newTask) {
    return (new Task(newTask)).save();
}

module.exports.deleteTask = (taskId, callback) => {
    var query = {_id: taskId};
    Task.remove(query, callback);
}

