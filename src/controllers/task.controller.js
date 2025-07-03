import errorHandler from "../utils/error.handler.js";
import taskService from "../services/task.service.js";

class TaskController{
    async create(req,res,next){
        try {
            const task = await taskService.create(req.body);
            return res.status(201).json(task);
        } catch (error) {
            next(error);
        }
    }

    async getTasks(req,res,next){
        try {
            console.log("Request time:", req.requestTime);
            const allTasks = await taskService.getAll();
            return res.status(200).json(allTasks);
        } catch (error) {
            next(error);
        }
    }
    

    async getTaskById (req,res,next){
        try {
            const task = await taskService.getById(req.params.id);
            return res.status(200).json(task);
        } catch (error) {
            next(error);
        }
    }

    async updateTask(req,res,next){
        try {
            const {body, params} = req;
            const post = await taskService.update(params.id,body);
            return res.status(200).json(post);
        } catch (error) {
            next(error);
        }
    }


    async deleteTask(req,res,next){
        try {
            const task = await taskService.delete(req.params.id);
            return res.status(200).json({message:'Task deleted'});
        } catch (error) {
            next(error);
        }
    }
}

export default new TaskController();
