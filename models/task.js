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
    user: {type: Schema.Types.ObjectId, ref:'User', required:true},
    status: ['Todo','Done'],
    dateDeadline: Date,
    dateFinished: Date,
    priority:Number
},
    {collection:"task"}
);

const Task = module.exports = mongoose.model('Task', TaskSchema);

module.exports.findTaskById = function (taskId) {
    var query = {_id: taskId};
    //console.log("query: " + JSON.stringify(query));
    return Task.findById(taskId);
}

module.exports.getTasks = function (user) {
    var query = {user: user._id};
    //console.log("query: " + JSON.stringify(query));
    return Task.find(query);
}

module.exports.getTasksTodo = function (user) {
    var query = {user: user._id, status:"Todo"};
    //console.log("query: " + JSON.stringify(query));
    return Task.find(query);
}

module.exports.getTasksDone = function (user) {
    var query = {user: user._id, status:"Done"};
    //console.log("query: " + JSON.stringify(query));
    return Task.find(query);
}

module.exports.addTask = function (newTask) {
    return (new Task(newTask)).save();
}

module.exports.deleteTask = (taskId, user) => {
    var query = {_id: taskId};
    return Task.remove(query);
}

module.exports.updateTask = function (taskId, newTask) {
    var query = {_id:taskId};
    return Task.findOneAndUpdate(query, newTask);
}


