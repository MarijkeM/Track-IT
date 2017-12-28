/**
 * Created by Marijke on 28/12/2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {type:String, required:true},
    estimatedTime: Number,
    realTime: Number
},
    {collection:"task"}
);

const Task = module.exports = mongoose.model('Task', TaskSchema);

module.exports.addTask = function (newTask) {
        return (new Task(newTask)).save();
}

/*
module.exports.deleteTask = (task) => {
    Task.pull(task);
    Task.save();
}
*/
