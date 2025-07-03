import {Schema,model} from "mongoose";

const TaskSchema =new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, default:'pending'},
    due_date: {type: Date}, 
},{timestamps: true});

const Task = model('Task', TaskSchema);
export default Task