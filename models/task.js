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

module.exports.addTask = function (newTask, user) {
        return (new Task(newTask)).save();
}


module.exports.deleteTask = (taskId, callback) => {
    var query = {_id: taskId};
    Task.remove(query, callback);
}

