
import TaskModel from "../models/Task.js";


class PostService{

    async create(task,author){
        const newTask = await TaskModel.create({...task,author});
        return newTask
    }

    async getAll(){
        const tasks = await TaskModel.find();
        return tasks
    }

    async getById(id){
        if(!id) throw new Error('id is required');
        const task = await TaskModel.findById(id);
        return task
    }

    async update(id,task){
        if(!id) throw new Error('id is required');
        const updatedTask = await TaskModel.findByIdAndUpdate(id,task,{new:true, runValidators:true});
        return updatedTask
    }

    async delete(id){
        if(!id) throw new Error('id is required');
        const deletedTask = await TaskModel.findByIdAndDelete(id);
        return deletedTask
    }
}

export default new PostService();